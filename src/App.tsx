import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Project from './Views/Project';

function App(): JSX.Element {
  return (
    <Router>
      <div className="bg-blue-clear h-screen min-h-screen px-6 pt-6">
        <Switch>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
