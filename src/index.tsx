import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import { ThemeProvider } from "emotion-theming";
import theme from "ui/styled/theme";
import { Provider } from "react-redux";
import { store, persistor } from "duck";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { GFL, GlobalStyles } from "ui";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={"test"}>
        <ThemeProvider theme={theme}>
          <GlobalStyles>
            <BrowserRouter basename="/dcs-task">
              <App />
            </BrowserRouter>
          </GlobalStyles>
        </ThemeProvider>
      </PersistGate>
    </Provider>
    <GFL />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
