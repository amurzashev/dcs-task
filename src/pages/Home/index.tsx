import React, { FC, useState } from "react";
import { City, GeoCity } from "types";
import { AutocompleteResults, Box } from "ui";
import { Input } from "ui";
import { geoApi } from "api";
import { DebounceInput } from "react-debounce-input";
import { Modal } from "containers";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import { setModalCity } from "actions/modalCity";

const Home: FC = () => {
  const [value, setValue] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!e.target.value.length) {
      setCities([]);
    } else {
      geoApi(e.target.value).then((res: GeoCity[]) =>
        setCities(
          res.map((geoCity) => ({
            name: geoCity.name,
            country: geoCity.countryName,
            lat: geoCity.lat,
            lng: geoCity.lng,
            id: String(geoCity.geonameId),
            population: geoCity.population,
          }))
        )
      );
    }
  };
  const callback = (city: City) => {
    const searchQuery = {
      lat: city.lat,
      lng: city.lng,
    };
    setCities([]);
    setValue("");
    dispatch(setModalCity(city));
    history.push(`?${queryString.stringify(searchQuery)}`);
  };
  return (
    <Box p={3}>
      <Box position="relative">
        <DebounceInput
          element={Input as any}
          value={value}
          onChange={onChange}
          minLength={0}
          debounceTimeout={300}
          placeholder="Search here..."
        />
        <Box position="absolute" left={0} right={0} mt={2}>
          <AutocompleteResults cities={cities} callback={callback} />
        </Box>
      </Box>
      <Modal />
    </Box>
  );
};

export default Home;
