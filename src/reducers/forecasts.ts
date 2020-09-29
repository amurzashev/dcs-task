const initialState = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_FORECAST":
      return {
        ...state,
        ...action.forecast,
      };
    default:
      return state;
  }
};
