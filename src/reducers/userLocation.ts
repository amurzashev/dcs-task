const initialState = "";

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER_LOCATION":
      return action.id;
    default:
      return state;
  }
};
