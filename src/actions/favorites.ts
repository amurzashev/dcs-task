import { AppThunk } from "duck";

export const addFavorite = (): AppThunk => async (dispatch, getState) => {
  const { modalCity } = getState();
  dispatch({
    type: "ADD_FAVORITE",
    city: modalCity,
  });
};

export const removeFavorite = (): AppThunk => async (dispatch, getState) => {
  const { modalCity } = getState();
  dispatch({
    type: "REMOVE_FAVORITE",
    city: modalCity,
  });
};
