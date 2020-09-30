import { City } from "types";

const initialState: City[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CITY":
      return [...state, action.city];
    case "ADD_CITIES":
      return [...state, ...action.cities].filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      );
    default:
      return state;
  }
};
