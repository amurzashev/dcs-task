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
      <Box mb={3}>
        <Text fontSize={4}>TOP 15</Text>
      </Box>
      {top.map((city) => {
        return <CityPreview key={city.geoname_id} city={city} />;
      })}
    </Box>
  );
};

export default Sidebar;
