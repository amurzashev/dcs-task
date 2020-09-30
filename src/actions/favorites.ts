import { ADD_FAVORITE, REMOVE_FAVORITE } from "constants/favorites";
import { AppThunk } from "duck";

export const addFavorite = (): AppThunk => async (dispatch, getState) => {
  const { modal } = getState();
  dispatch({
    type: ADD_FAVORITE,
    id: modal,
  });
};

export const removeFavorite = (): AppThunk => async (dispatch, getState) => {
  const { modal } = getState();
  dispatch({
    type: REMOVE_FAVORITE,
    id: modal,
  });
};
