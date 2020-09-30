import { getUserCity } from "actions/cities";
import CityPreview from "components/CityPreview";
import { usePosition } from "hooks";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { City } from "types";
import { Box, Text } from "ui";

interface UserLocationProps {
  userLocation: string;
  cities: City[];
}

const UserLocation: FC<UserLocationProps> = ({ userLocation, cities }) => {
  const { error, latitude, longitude } = usePosition();
  const dispatch = useDispatch();
  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getUserCity(latitude, longitude));
    }
  }, [dispatch, latitude, longitude]);
  if (error) {
    return (
      <Box position="fixed" bottom={20} right={20}>
        Please allow position tracking
      </Box>
    );
  }
  console.log(userLocation);
  if (userLocation) {
    const city = cities.find((city) => city.id === userLocation)!;
    return (
      <Box position="fixed" bottom={20} right={20}>
        <Text>Your current location</Text>
        <CityPreview city={city} />
      </Box>
    );
  }
  return null;
};

export default UserLocation;
