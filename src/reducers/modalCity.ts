const initialState = "";

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_MODAL_CITY":
      return action.city;
    default:
      return state;
  }
};
