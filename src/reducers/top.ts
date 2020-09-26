const top15 = [
  "35.680,139.769", // tokyo
  "28.704,77.102", // delhi
  "31.230,121.473", // shanghai
  "23.550,46.633", // saõ paulo
  "19.432,99.133", // mexico city
  "30.044,31.235", // cairo
  "19.076,72.877", // mumbai
  "39.904,116.407", // beijing
  "23.810,90.412", // dhaka
  "34.693,135.502", // osaka
  "40.712,74.006", // nyc
  "24.860,67.001", // karachi
  "34.603,58.381", // buenos aires
  "29.431,106.912", // chongqing
  "41.008,28.978", // istanbul
];

const initialState: string[] = [...top15];

// temp
export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
