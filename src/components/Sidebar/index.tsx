import { CityPreview } from "containers";
import React, { FC, useEffect } from "react";
import { TopCity } from "types";
import { Box, Text } from "ui";

interface SidebarProps {
  top: TopCity[];
  getTop15Cities: () => void;
}

const Sidebar: FC<SidebarProps> = ({ top, getTop15Cities }) => {
  useEffect(() => {
    if (!top.length) {
      getTop15Cities();
    }
  }, [top, getTop15Cities]);
  return (
    <Box p={3}>
      <Text>top 15</Text>
      {top.map((city) => {
        const data = {
          name: city.name,
          country: city.country,
          population: city.population,
          lat: city.latitude,
          lon: city.longitude,
        };
        return <CityPreview key={city.geoname_id} {...data} />;
      })}
    </Box>
  );
};

export default Sidebar;
