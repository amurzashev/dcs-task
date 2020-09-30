import { AppThunk } from "duck";

export const setModalCity = (id: string): AppThunk => (dispatch) => {
  dispatch({
    type: "SET_MODAL_CITY",
    id,
  });
};
