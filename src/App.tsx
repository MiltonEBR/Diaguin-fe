import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Goals from './Views/Goals';
import Home from './Views/Home';
import Project from './Views/Project';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/project/:id">
          <Project />
        </Route>
        <Route path="/goals/:id">
          <Goals />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
