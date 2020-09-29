import { RootState } from "duck";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Box } from "ui";

interface ForecastPreviewProps {
  coordinates: string;
}

const ForecastPreview: FC<ForecastPreviewProps> = ({ coordinates }) => {
  const forecast = useSelector(
    (state: RootState) => state.forecasts[coordinates]
  );
  if (!forecast) {
    return <Box mt={2}>Loading forecast preview</Box>;
  }
  return <Box mt={2}>Current: {forecast.temperature}°</Box>;
};

export default ForecastPreview;
