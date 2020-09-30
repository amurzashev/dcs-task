const initialState: string[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TOP_CITIES":
      return [...new Set([...state, ...action.ids])];
    case "REMOVE_TOP":
      return state.filter((el) => el !== action.id);
    default:
      return state;
  }
};
