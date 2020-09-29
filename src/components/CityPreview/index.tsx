import React, { FC, useEffect } from "react";
import styled from "ui/styled";
import { Text, Link } from "ui";
import { useDispatch, useSelector } from "react-redux";
import { TopCity } from "types";
import { setModalCity } from "actions/modalCity";
import { RootState } from "duck";
import { getForecast } from "actions/forecast";
import ForecastPreview from "./ForecastPreview";

interface CityPreviewProps {
  city: TopCity;
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
  const coordinates = `${city.latitude},${city.longitude}`;
  const dispatch = useDispatch();
  const forecast = useSelector(
    (state: RootState) => state.forecasts[coordinates]
  );
  useEffect(() => {
    if (!forecast) {
      dispatch(getForecast(city.latitude, city.longitude));
    }
  }, [city.latitude, city.longitude, coordinates, dispatch, forecast]);
  return (
    <BoxLink
      to={`?lat=${city.latitude}&lng=${city.longitude}`}
      p={3}
      onClick={() =>
        dispatch(
          setModalCity({
            name: city.name,
            country: city.country,
            lat: city.latitude,
            lng: city.longitude,
          })
        )
      }
    >
      <Text>
        {city.name}, {city.country}, {city.population}
      </Text>
      <ForecastPreview coordinates={coordinates} />
    </BoxLink>
  );
};

export default CityPreview;
