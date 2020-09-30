import { addFavorite, removeFavorite } from "actions/favorites";
import { RootState } from "duck";
import React, { FC } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Box, Text, Button } from "ui";
import styled from "ui/styled";

interface BodyProps {
  lat: string;
  lng: string;
  name?: string;
  country?: string;
}

const Head = styled(Box)`
  background: ${(props) => props.theme.colors.primary};
`;

const HeadText = styled(Text)`
  color: white;
`;

interface ImgBoxProps {
  src: string;
}

const ImgBox = styled(Box)<ImgBoxProps>`
  background-image: url(${(props) => props.src});
  height: 50px;
  width: 50px;
  background-size: contain;
  border-radius: 4px;
`;

interface DescriptionProps {
  coordinates: string;
}

const Description: FC<DescriptionProps> = ({ coordinates }) => {
  const dispatch = useDispatch();
  const forecast = useSelector(
    (state: RootState) => state.forecasts[coordinates]
  );
  const favorites = useSelector((state: RootState) => state.favorites);
  if (!forecast) {
    return (
      <Box p={3}>
        <Text fontSize={4}>Loading data</Text>
      </Box>
    );
  }
  const isFavorite = favorites.some(
    (city) => `${city.lat},${city.lng}` === coordinates
  );
  const date = new Date(forecast.last_update);
  const formattedDate = date.toLocaleDateString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <Box p={3} position="relative" height="100%">
      <Text fontSize={4} mb={3}>
        Current temperature: {forecast.temperature}°
      </Text>
      <Text fontSize={3} mb={3}>
        Feels like: {forecast.feelslike}°
      </Text>
      <Text fontSize={3} mb={3}>
        {forecast.weather_descriptions[0]}
      </Text>
      <ImgBox src={forecast.weather_icons[0]} mb={3} />
      <Text>Last updated: {formattedDate}</Text>
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        p={3}
        display="flex"
        justifyContent="space-between"
      >
        {isFavorite ? (
          <Button
            appearance="regular"
            color="error"
            onClick={() => dispatch(removeFavorite())}
          >
            Remove from favs
          </Button>
        ) : (
          <Button
            appearance="regular"
            color="primary"
            onClick={() => dispatch(addFavorite())}
          >
            Add to favs
          </Button>
        )}
        <Button appearance="outline" color="secondary">
          Update info
        </Button>
      </Box>
    </Box>
  );
};

const Body: FC<BodyProps> = ({ lat, lng, name, country }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Head p={3}>
        <HeadText fontSize={4} fontWeight="bold">
          {name}, {country}
        </HeadText>
      </Head>
      <Description coordinates={`${lat},${lng}`} />
    </Box>
  );
};

const mapStateToProps = (state: RootState) => ({
  modal: state.modal,
});
export default connect(mapStateToProps)(Body);
