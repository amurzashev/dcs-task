import React, { FC, useEffect, useState } from "react";
import styled from "ui/styled";
import { Box, Text } from "ui";

interface CityPreviewProps {
  name: string;
  country: string;
  population: number;
  lat: string;
  lon: string;
}

const PreviewBox = styled(Box)`
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const CityPreview: FC<CityPreviewProps> = ({ name, country, population }) => {
  return (
    <PreviewBox p={3}>
      <Text>
        {name}, {country}, {population}
      </Text>
    </PreviewBox>
  );
};

export default CityPreview;
