import { TopCity } from "types";

const initialState: TopCity[] = [];

// temp
export default (state = initialState, action: any) => {
  switch (action.type) {
    case "LOAD_TOP_CITIES_FINISH":
      return action.payload;
    default:
      return state;
  }
};
