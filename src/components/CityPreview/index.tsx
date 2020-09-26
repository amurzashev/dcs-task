import { getCity } from "actions/cities";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { City } from "types";
import { Box } from "ui";

interface CityPreviewProps {
  latlon: string;
  cities: City[];
}

const CityPreview: FC<CityPreviewProps> = ({ latlon, cities }) => {
  const [city, setCity] = useState(
    cities.find((city) => city.lat + city.lon === latlon)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!city) {
      dispatch(getCity(latlon));
    }
  }, [city, dispatch, latlon]);
  useEffect(() => {
    setCity(cities.find((city) => city.lat + city.lon === latlon));
  }, [cities, latlon]);
  if (!city) return <Box>{latlon}</Box>;
  return (
    <Box>
      {city.name} - {city.country}
    </Box>
  );
};

export default CityPreview;
