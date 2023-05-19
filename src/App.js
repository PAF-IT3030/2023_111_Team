import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

const App = () => {
  return (
    <BRouter>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </BRouter>
  );
};

export default App;
