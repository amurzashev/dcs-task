import { combineReducers } from "redux";
import { forecasts, cities, top, favorites, modalCity } from "reducers";

export default combineReducers({
  forecasts,
  cities,
  top,
  favorites,
  modalCity,
});
