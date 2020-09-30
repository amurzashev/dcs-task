import { CityPreview } from "containers";
import React, { FC, useEffect } from "react";
import { City } from "types";
import { Box, Text } from "ui";

interface SidebarProps {
  top: string[];
  getTop15Cities: () => void;
  cities: City[];
}

const getSortedTopCities = (top: string[], cities: City[]): City[] => {
  const topCities = [];
  for (let i = 0; i < top.length; i++) {
    for (let j = 0; j < cities.length; j++) {
      if (top[i] === cities[j].id) {
        topCities.push(cities[j]);
      }
    }
  }
  return topCities.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
  );
};

const Sidebar: FC<SidebarProps> = ({ top, getTop15Cities, cities }) => {
  useEffect(() => {
    if (!top.length) {
      getTop15Cities();
    }
  }, [top, getTop15Cities]);
  const topCities = getSortedTopCities(top, cities);
  return (
    <Box p={3}>
      <Box mb={3}>
        <Text fontSize={4}>TOP 15</Text>
      </Box>
      {topCities.map((city) => (
        <CityPreview key={city.id} city={city} />
      ))}
    </Box>
  );
};

export default Sidebar;
