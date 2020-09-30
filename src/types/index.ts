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
