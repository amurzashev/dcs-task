const top15 = [
  "35.690,139.692", // tokyo
  "28.667,77.217", // delhi
  "31.005,121.409", // shanghai
  "-23.533,-46.617", // saõ paulo
  "19.429,-99.128", // mexico city
  "30.050,31.250", // cairo
  "18.975,72.826", // mumbai
  "39.929,116.388", // beijing
  "23.723,90.409", // dhaka
  "34.694,135.502", // osaka
  "40.714,-74.006", // nyc
  "24.867,67.050", // karachi
  "-34.588,-58.673", // buenos aires
  "29.563,106.553", // chongqing
  "41.019,28.965", // istanbul
];

const initialState: string[] = [...top15];

// temp
export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
