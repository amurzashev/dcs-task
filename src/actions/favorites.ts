import { AppThunk } from "duck";

export const addFavorite = (): AppThunk => async (dispatch, getState) => {
  const { modal } = getState();
  dispatch({
    type: "ADD_FAVORITE",
    city: modal,
  });
};

export const removeFavorite = (): AppThunk => async (dispatch, getState) => {
  const { modal } = getState();
  dispatch({
    type: "REMOVE_FAVORITE",
    city: modal,
  });
};
