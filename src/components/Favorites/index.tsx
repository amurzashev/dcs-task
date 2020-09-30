import { CityPreview } from "components";
import React, { FC } from "react";
import { City } from "types";
import { Box, Text } from "ui";

interface FavoritesProps {
  favorites: string[];
  cities: City[];
}

const getFavoriteCities = (favorites: string[], cities: City[]) => {
  const favCities = [];
  for (let i = 0; i < favorites.length; i++) {
    for (let j = 0; j < cities.length; j++) {
      if (favorites[i] === cities[j].id) {
        favCities.push(cities[j]);
      }
    }
  }
  return favCities.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
  );
};

const Favorites: FC<FavoritesProps> = ({ favorites, cities }) => {
  const favoriteCities = getFavoriteCities(favorites, cities);
  return (
    <Box p={3}>
      <Box mb={3}>
        <Text fontSize={4}>Favorites</Text>
      </Box>
      {favoriteCities.map((city) => (
        <CityPreview key={city.id} city={city} />
      ))}
    </Box>
  );
};

export default Favorites;
