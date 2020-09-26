import CityPreview from "components/CityPreview";
import React, { FC } from "react";
import { Box } from "ui";

interface SidebarProps {
  top: string[];
}

const Sidebar: FC<SidebarProps> = ({ top }) => {
  return (
    <Box px={3} py={2}>
      {top.map((t) => (
        <CityPreview latlon={t} />
      ))}
    </Box>
  );
};

export default Sidebar;
