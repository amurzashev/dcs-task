const initialState: string[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.id];
    case "REMOVE_FAVORITE":
      return state.filter((el) => el !== action.id);
    default:
      return state;
  }
};
