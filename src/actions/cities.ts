import { AppThunk } from "duck";
import { geoApi } from "api";
import { City } from "types";
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
  const cities = response.data.records.map((r: any) => ({
    name: r.fields.name,
    country: r.fields.country,
    lat: r.fields.latitude,
    lng: r.fields.longitude,
    id: r.fields.geoname_id,
    population: r.fields.population,
  }));
  const ids = response.data.records.map((r: any) => r.fields.geoname_id);
  dispatch({
    type: "ADD_CITIES",
    cities,
  });
  dispatch({
    type: "ADD_TOP_CITIES",
    ids,
  });
};
