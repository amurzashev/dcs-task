import { CityPreview } from "containers";
import React, { FC, useEffect } from "react";
import { City } from "types";
import { Box, Button, Text } from "ui";

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
      <Box mb={3} display="flex" alignItems="center">
        <Text fontSize={4} mr={3}>
          {top.length ? `TOP ${top.length}` : "NO TOP CITIES"}
        </Text>
        {top.length >= 1 && top.length < 15 ? (
          <Button
            appearance="outline"
            color="primary"
            onClick={() => getTop15Cities()}
          >
            Restore list
          </Button>
        ) : null}
      </Box>
      {topCities.map((city) => (
        <CityPreview
          key={city.id}
          city={city}
          isTop={Boolean(top.length > 1)}
        />
      ))}
    </Box>
  );
};

export default Sidebar;
