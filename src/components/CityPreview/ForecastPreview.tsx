import { RootState } from "duck";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Box } from "ui";

interface ForecastPreviewProps {
  id: string;
}

const ForecastPreview: FC<ForecastPreviewProps> = ({ id }) => {
  const forecast = useSelector((state: RootState) => state.forecasts[id]);
  if (!forecast) {
    return <Box mt={2}>Loading forecast preview</Box>;
  }
  return <Box mt={2}>Current: {forecast.temperature}°F</Box>;
};

export default ForecastPreview;
