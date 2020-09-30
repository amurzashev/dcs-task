import { addFavorite, removeFavorite } from "actions/favorites";
import { getForecast } from "actions/forecast";
import { RootState } from "duck";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { City } from "types";
import { Box, Text, Button } from "ui";
import styled from "ui/styled";

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
  forecast: any;
  isFavorite: boolean;
  id: string;
}

const Description: FC<DescriptionProps> = ({ forecast, isFavorite, id }) => {
  const dispatch = useDispatch();
  if (!forecast) {
    return (
      <Box p={3}>
        <Text fontSize={4}>Loading data</Text>
      </Box>
    );
  }
  const date = new Date(forecast.last_update);
  const formattedDate = date.toLocaleDateString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const hour = date.getHours();
  const minutes = date.getMinutes();
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
      <Text>
        Last updated: {formattedDate} {hour}:{minutes}
      </Text>
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
        <Button
          appearance="outline"
          color="secondary"
          onClick={() => dispatch(getForecast(id, true))}
        >
          Update info
        </Button>
      </Box>
    </Box>
  );
};

const Body: FC = () => {
  const { modal, cities, forecasts, favorites } = useSelector(
    (state: RootState) => ({
      modal: state.modal,
      cities: state.cities,
      forecasts: state.forecasts,
      favorites: state.favorites,
    })
  );
  const forecast = forecasts[modal];
  const city: City = cities.find((city: City) => city.id === modal);
  const isFavorite = favorites.some((fav) => fav === modal);
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Head p={3}>
        <HeadText fontSize={4} fontWeight="bold">
          {city.name}, {city.country}
        </HeadText>
      </Head>
      <Description forecast={forecast} isFavorite={isFavorite} id={city.id} />
    </Box>
  );
};

export default Body;
