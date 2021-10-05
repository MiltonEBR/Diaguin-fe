import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Goals from './Views/Goals';
import Home from './Views/Home';
import Project from './Views/Project';

import Store from './hooks/store';

function App(): JSX.Element {
  const { projects, goals } = Store();

  const match = useRouteMatch<{ id: string }>('/project/:id');
  const project = match
    ? projects.find((p) => {
        return String(p.id) === match.params.id;
      })
    : null;

  const filteredGoals = project
    ? goals.filter((g) => project.goalsId.includes(g.id))
    : [];

  return (
    <Switch>
      <Route path="/project/:id">
        <Project project={project || null} goals={filteredGoals} />
      </Route>
      <Route path="/goals/:id">
        <Goals />
      </Route>
      <Route path="/">
        <Home projects={projects} />
      </Route>
    </Switch>
  );
}

export default App;
