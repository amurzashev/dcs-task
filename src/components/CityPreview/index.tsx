import React, { FC } from "react";
import { Box } from "ui";

interface CityPreviewProps {
  latlon: string;
}

const CityPreview: FC<CityPreviewProps> = ({ latlon }) => {
  return <Box>{latlon}</Box>;
};

export default CityPreview;
