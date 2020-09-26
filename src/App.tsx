import { Forecast, Home } from "containers";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "ui";

function App() {
  return (
    <Box height="100vh">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/forecast/:latlon" component={Forecast} />
      </Switch>
    </Box>
  );
}

export default App;
