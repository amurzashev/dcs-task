import { AppThunk } from "duck";

import { forecastApi } from "api";
import { Forecast } from "types";

export const getModalForecast = (): AppThunk => (dispatch, getState) => {
  const { modalCity } = getState();
  dispatch(getForecast(modalCity.lat, modalCity.lng));
};

export const getForecast = (lat: string, lng: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { data } = await forecastApi.get("current", {
    params: {
      query: `${lat},${lng}`,
    },
  });
  const { current }: { current: Forecast } = data;
  dispatch({
    type: "SET_FORECAST",
    forecast: {
      [`${lat},${lng}`]: {
        ...current,
        last_update: Date.now(),
      },
    },
  });
};
