import { Sidebar, Favorites } from "containers";
import { Home } from "containers";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "ui";

function App() {
  return (
    <Box height="100vh">
      <Box height="100%" display="grid" gridTemplateColumns="320px 1fr 320px">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Favorites />
      </Box>
    </Box>
  );
}

export default App;
