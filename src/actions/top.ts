import { REMOVE_TOP } from "constants/top";
import { AppThunk } from "duck";

export const removeFromTop = (id: string): AppThunk => (dispatch) => {
  dispatch({
    type: REMOVE_TOP,
    id,
  });
};
