import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Main from "./components/Main";

import newPoke from "./components/newPoke";
import NewSearch from "./components/NewSearch"; //   <Route exact path="/search" component={NewSearch} />

import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/new" component={newPoke} />
          <Route exact path="/search" component={NewSearch} />
          <Route
            exact
            path="/:pokemonId"
            render={(props) => <Pokemon {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
