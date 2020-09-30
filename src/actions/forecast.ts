import { AppThunk } from "duck";
import { forecastApi } from "api";
import { City, Forecast } from "types";
import { toast } from "react-toastify";
import { SET_FORECAST } from "constants/forecast";

export const getModalForecast = (): AppThunk => (dispatch, getState) => {
  const { modal, cities } = getState();
  const city: City = cities.find((city: City) => city.id === modal)!;
  dispatch(getForecast(city.id));
};

export const getForecast = (
  id: string,
  showToast: boolean = false
): AppThunk => async (dispatch, getState) => {
  const { cities } = getState();
  const city = cities.find((c: City) => c.id === id)!;
  const { data } = await forecastApi.get("current", {
    params: {
      query: `${city.lat},${city.lng}`,
    },
  });
  const { current }: { current: Forecast } = data;
  dispatch({
    type: SET_FORECAST,
    forecast: {
      [id]: {
        ...current,
        last_update: Date.now(),
      },
    },
  });
  if (showToast) {
    toast.success("Forecast updated");
  }
};
