import React, { FC, useEffect } from "react";
import styled from "ui/styled";
import { Text, Link } from "ui";
import { useDispatch, useSelector } from "react-redux";
import { City } from "types";
import { setModalCity } from "actions/modalCity";
import { RootState } from "duck";
import { getForecast } from "actions/forecast";
import ForecastPreview from "./ForecastPreview";

interface CityPreviewProps {
  city: City;
}

const BoxLink = styled(Link)`
  display: block;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const CityPreview: FC<CityPreviewProps> = ({ city }) => {
  const coordinates = `${city.lat},${city.lng}`;
  const dispatch = useDispatch();
  const forecast = useSelector(
    (state: RootState) => state.forecasts[coordinates]
  );
  useEffect(() => {
    if (!forecast) {
      dispatch(getForecast(city.lat, city.lng));
    }
  }, [city.lat, city.lng, coordinates, dispatch, forecast]);
  return (
    <BoxLink
      to={`?lat=${city.lat}&lng=${city.lng}`}
      p={3}
      onClick={() => dispatch(setModalCity(coordinates))}
    >
      <Text>
        {city.name}, {city.country}, {city.population}
      </Text>
      <ForecastPreview coordinates={coordinates} />
    </BoxLink>
  );
};

export default CityPreview;
