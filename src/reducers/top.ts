const initialState: string[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TOP_CITIES":
      return [...state, ...action.ids];
    default:
      return state;
  }
};
