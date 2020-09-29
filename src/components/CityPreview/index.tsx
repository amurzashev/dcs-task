import React, { FC } from "react";
import styled from "ui/styled";
import { Text, Link } from "ui";

interface CityPreviewProps {
  name: string;
  country: string;
  population: number;
  lat: string;
  lon: string;
}

const BoxLink = styled(Link)`
  display: block;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const CityPreview: FC<CityPreviewProps> = ({
  name,
  country,
  population,
  lat,
  lon,
}) => {
  return (
    <BoxLink to={`?lat=${lat}&lng=${lon}`} p={3}>
      <Text>
        {name}, {country}, {population}
      </Text>
    </BoxLink>
  );
};

export default CityPreview;
