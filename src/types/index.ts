export type Coordinates = {
  lat: string;
  lon: string;
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
  region: string;
} & Coordinates;
