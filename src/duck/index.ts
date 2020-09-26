import { Action, createStore, applyMiddleware } from "redux";
import { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AxiosInstance } from "axios";
import rootReducer from "./rootReducer";

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
