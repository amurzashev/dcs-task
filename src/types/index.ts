import { ADD_CITIES, ADD_CITY } from "constants/cities";

export type Coordinates = {
  lat: string;
  lon: string;
};

export type GeoCoordinates = {
  lat: string;
  lng: string;
};

export type Forecast = {
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  uv_index: number;
  feelslike: number;
  wind_dir: string;
  wind_speed: number;
  humidity: number;
  visibility: number;
  last_update: number;
} & Coordinates;

export type City = {
  name: string;
  country: string;
  id: string;
  population: number;
} & GeoCoordinates;

export type GeoCity = {
  name: string;
  population: number;
  lat: string;
  lng: string;
  countryName: string;
  geonameId: number;
  [key: string]: any;
};

export type CitiesState = City[];

export interface AddCityAction {
  type: typeof ADD_CITY;
  city: City;
}

export interface AddCitiesAction {
  type: typeof ADD_CITIES;
  cities: City[];
}

export type CityActionTypes = AddCityAction | AddCitiesAction;
