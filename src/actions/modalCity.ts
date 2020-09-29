import { AppThunk } from "duck";

type ModalCity = {
  name: string;
  country: string;
  lat: string;
  lng: string;
};

export const setModalCity = (city: ModalCity): AppThunk => (dispatch) => {
  dispatch({
    type: "SET_MODAL_CITY",
    city,
  });
};
