import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Goals from './Views/Goals';
import Home from './Views/Home';
import Project from './Views/Project';

import Store from './hooks/store';
import ProjectGoals from './Views/ProjectGoals';

function App(): JSX.Element {
  const { projects, goals, createProject, createGoal } = Store();

  const match = useRouteMatch<{ id: string }>({
    path: '/project/:id',
    strict: false,
  });
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
      <Route path="/project/:id/details">
        <ProjectGoals
          project={project || null}
          goals={filteredGoals}
          createGoal={createGoal}
        />
      </Route>
      <Route path="/project/:id">
        <Project project={project || null} goals={filteredGoals} />
      </Route>
      <Route path="/goals/:id">
        <Goals />
      </Route>
      <Route path="/">
        <Home projects={projects} goals={goals} createProject={createProject} />
      </Route>
    </Switch>
  );
}

export default App;
