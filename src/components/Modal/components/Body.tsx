import { RootState } from "duck";
import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import { Box, Text } from "ui";
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
`;

interface DescriptionProps {
  coordinates: string;
}

const Description: FC<DescriptionProps> = ({ coordinates }) => {
  const forecast = useSelector(
    (state: RootState) => state.forecasts[coordinates]
  );
  if (!forecast) {
    return (
      <Box p={3}>
        <Text fontSize={4}>Loading data</Text>
      </Box>
    );
  }
  console.log(forecast);
  return (
    <Box p={3} position="relative">
      <Text fontSize={4} mb={3}>
        Current temperature: {forecast.temperature}°
      </Text>
      <Text fontSize={3} mb={3}>
        Feels like: {forecast.feelslike}°
      </Text>
      <Text fontSize={3} mb={3}>
        {forecast.weather_descriptions[0]}
      </Text>
      <ImgBox src={forecast.weather_icons[0]} />
      <Box position="absolute" left={0} right={0} bottom={0}></Box>
    </Box>
  );
};

const Body: FC<BodyProps> = ({ lat, lng, name, country }) => {
  return (
    <Box>
      <Head p={3}>
        <HeadText fontSize={4} fontWeight="bold">
          {name}, {country}
        </HeadText>
      </Head>
      <Description coordinates={`${lat},${lng}`} />
    </Box>
  );
};

const mapStateToProps = (state: RootState) => state.modalCity;
export default connect(mapStateToProps)(Body);
