import { AppThunk } from "duck";
import { City } from "types";

export const setModalCity = (city: City): AppThunk => (dispatch, getState) => {
  dispatch({
    type: "SET_MODAL_CITY",
    id: city.id,
  });
  const cityExists = getState().cities.some((c) => c.id === city.id);
  if (!cityExists) {
    dispatch({
      type: "ADD_CITY",
      payload: city,
    });
  }
};
