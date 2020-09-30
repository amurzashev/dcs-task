import React, { FC, useEffect } from "react";
import styled from "ui/styled";
import { Text, Box } from "ui";
import { useDispatch, useSelector } from "react-redux";
import { City } from "types";
import { setModalCity } from "actions/modalCity";
import { RootState } from "duck";
import { getForecast } from "actions/forecast";
import ForecastPreview from "./ForecastPreview";
import { useHistory } from "react-router-dom";
import { removeFromTop } from "actions/top";

interface CityPreviewProps {
  city: City;
  isTop?: boolean;
}

const BoxLink = styled(Box)`
  display: block;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
  z-index: 90;
`;

const UnderlinedText = styled(Text)`
  text-decoration: underline;
  z-index: 100;
`;

const CityPreview: FC<CityPreviewProps> = ({ city, isTop }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const forecast = useSelector((state: RootState) => state.forecasts[city.id]);
  useEffect(() => {
    if (!forecast) {
      dispatch(getForecast(city.id));
    }
  }, [city.id, dispatch, forecast]);
  const removeFromTopClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(removeFromTop(city.id));
  };
  const onClick = () => {
    history.push(`?lat=${city.lat}&lng=${city.lng}`);
    dispatch(setModalCity(city));
  };
  return (
    <BoxLink p={3} onClick={onClick}>
      <Text>
        {city.name}, {city.country}
      </Text>
      <Text mt={1}>Population: {city.population}</Text>
      <ForecastPreview id={city.id} />
      {isTop ? (
        <UnderlinedText onClick={removeFromTopClick}>
          Remove from favorites
        </UnderlinedText>
      ) : null}
    </BoxLink>
  );
};

CityPreview.defaultProps = {
  isTop: false,
};
export default CityPreview;
