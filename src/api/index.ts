import axios from "axios";
//@ts-ignore
import Geonames from "geonames.js";
import { API_KEY } from "../config";

// TODO: weatherstack api and autocomplete search

export const forecastApi = axios.create({
  baseURL: `http://api.weatherstack.com/`,
  params: {
    access_key: API_KEY,
    units: "f",
  },
});

const geo = new Geonames({
  username: "ablitto",
  lan: "en",
  encoding: "JSON",
});

export const geoApi = async (cityName: string) => {
  try {
    const locations = await geo.search({
      q: cityName,
      featureCode: "P",
      maxRows: 1,
      isNameRequired: true,
    });
    return locations.geonames;
  } catch (err) {
    console.error(err);
  }
  return [];
};
