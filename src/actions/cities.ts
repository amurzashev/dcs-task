import { AppThunk } from "duck";
import { geoApi } from "api";
import { City, TopCity } from "types";
import axios from "axios";

export const getCityByName = (cityName: string): AppThunk => async (
  dispatch,
  getState
) => {
  const cities: City[] | [] = await geoApi(cityName);
  dispatch({
    type: "ADD_CITY",
    payload: cities[0],
  });
};

export const getTop15Cities = (): AppThunk => async (dispatch, getState) => {
  const response = await axios.get(
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&rows=15&sort=population&facet=timezone&facet=country"
  );

  const payload = response.data.records
    .map((r: TopCity) => {
      const { alternate_names, ...rest } = r.fields;
      return {
        ...rest,
        visible: true,
      };
    })
    .sort((a: TopCity, b: TopCity) =>
      a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
    );
  dispatch({
    type: "LOAD_TOP_CITIES_FINISH",
    payload,
  });
};
