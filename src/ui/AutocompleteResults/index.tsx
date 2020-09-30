import React, { FC } from "react";
import styled from "ui/styled";
import { Text } from "ui";
import { City } from "types";

interface WrapProps {
  visible: boolean;
}

const Wrap = styled.ul<WrapProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
  background: white;
  padding: 0;
  margin: 0;
  list-style: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 8px 0;
  border-radius: ${(props) => props.theme.borders[0]}px;
`;

const CityOption = styled.li`
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 12px;
  &:hover {
    background: ${(props) => props.theme.colors.primaryDim};
  }
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
    <Wrap visible={Boolean(cities.length)}>
      {cities.map((city) => (
        <CityOption key={city.id} onClick={() => callback(city)}>
          <Text fontSize={2}>
            {city.name}, {city.country}
          </Text>
        </CityOption>
      ))}
    </Wrap>
  );
};

export default AutocompleteResults;
