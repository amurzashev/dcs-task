import React, { FC, useState } from "react";
import { City } from "types";
import { AutocompleteResults, Box } from "ui";
import { Input } from "ui";
import { geoApi } from "api";
import { DebounceInput } from "react-debounce-input";
import { Modal } from "containers";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

const Home: FC = () => {
  const [value, setValue] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const history = useHistory();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!e.target.value.length) {
      setCities([]);
    } else {
      geoApi(e.target.value).then((res: City[]) => setCities(res));
    }
  };
  const callback = (city: City) => {
    const searchQuery = {
      lat: city.lat,
      lng: city.lng,
    };
    history.push(`?${queryString.stringify(searchQuery)}`);
  };
  return (
    <Box p={3}>
      <Box position="relative">
        <DebounceInput
          element={Input as any} // temp
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
