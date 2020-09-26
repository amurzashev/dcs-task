import { AppThunk } from "duck";

import { forecastApi } from "api";

export const getCity = (latlon: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { data } = await forecastApi.get("current", {
    params: {
      query: latlon,
    },
  });
  dispatch({
    type: "ADD_CITY",
    payload: data.location,
  });
};
