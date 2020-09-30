const initialState: any[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.city];
    case "REMOVE_FAVORITE":
      return state.filter(
        (el) => el.lat !== action.city.lat && el.lng !== action.city.lng
      );
    default:
      return state;
  }
};
