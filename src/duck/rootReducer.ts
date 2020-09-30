import { combineReducers } from "redux";
import {
  forecasts,
  cities,
  top,
  favorites,
  modal,
  userLocation,
} from "reducers";

export default combineReducers({
  forecasts,
  cities,
  top,
  favorites,
  modal,
  userLocation,
});
