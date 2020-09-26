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
  countryName: string;
  region: string;
} & GeoCoordinates;

export type TopCity = {
  name: string;
  modification_date: string;
  country: string;
  feature_class: string;
  feature_code: string;
  longitude: string;
  geoname_id: string;
  timezone: string;
  dem: number;
  country_code: string;
  ascii_name: string;
  latitude: string;
  admin1_code: string;
  population: number;
  visible: boolean;
  [key: string]: any;
};
