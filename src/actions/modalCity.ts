import { AppThunk } from "duck";

export const setModalCity = (city: string): AppThunk => (dispatch) => {
  dispatch({
    type: "SET_MODAL_CITY",
    city,
  });
};
