const initialState = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        [action.id]: action.text,
      };
    case "DELETE_NOTE":
      return {
        ...state,
        [action.id]: action.text,
      };
    default:
      return state;
  }
};
