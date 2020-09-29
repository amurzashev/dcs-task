import React, { FC } from "react";
import styled from "ui/styled";
import { City } from "types";

const Wrap = styled.ul`
  background: white;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CityOption = styled.li`
  height: 36px;
  cursor: pointer;
`;

interface AutocompleteResultsProps {
  cities: City[];
  callback: (val?: any) => void;
}

const AutocompleteResults: FC<AutocompleteResultsProps> = ({
  cities,
  callback,
}) => {
  return (
    <Wrap>
      {cities.map((city) => (
        <CityOption key={city.geonameId} onClick={() => callback(city)}>
          {city.name}, {city.countryName}
        </CityOption>
      ))}
    </Wrap>
  );
};

export default AutocompleteResults;
