import { City } from "types";

const initialState: City[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CITY":
      return [...state, action.payload];
    case "ADD_CITIES":
      return [...state, ...action.cities];
    default:
      return state;
  }
};
