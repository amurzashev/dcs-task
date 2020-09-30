import { AppThunk } from "duck";

export const addNote = (id: string, text: string): AppThunk => (dispatch) => {
  dispatch({
    type: "ADD_NOTE",
    id,
    text,
  });
};

export const deleteNote = (id: string): AppThunk => (dispatch) => {
  dispatch(addNote(id, ""));
};
