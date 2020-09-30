import { ADD_CITIES, ADD_CITY } from "constants/cities";
import { CitiesState, CityActionTypes } from "types";

const initialState: CitiesState = [];

export default (state = initialState, action: CityActionTypes): CitiesState => {
  switch (action.type) {
    case ADD_CITY:
      return [...state, action.city];
    case ADD_CITIES:
      return [...state, ...action.cities].filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      );
    default:
      return state;
  }
};
