type InitialState = {
  city: string;
  country: string;
  lat: string;
  lng: string;
};

const initialState: InitialState = {
  city: "",
  country: "",
  lat: "",
  lng: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_MODAL_CITY":
      return action.city;
    default:
      return state;
  }
};
