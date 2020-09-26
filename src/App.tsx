import { Sidebar } from "containers";
import { Forecast, Home } from "containers";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "ui";

function App() {
  return (
    <Box height="100vh">
      <Box height="100%" display="grid" gridTemplateColumns="320px 1fr">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forecast/:latlon" component={Forecast} />
        </Switch>
      </Box>
    </Box>
  );
}

export default App;
