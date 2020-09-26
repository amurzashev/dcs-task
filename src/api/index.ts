import axios from "axios";
import { API_KEY } from "../config";

export default axios.create({
  baseURL: "https://api.weatherstack.com/",
  params: {
    access_key: API_KEY,
  },
});
