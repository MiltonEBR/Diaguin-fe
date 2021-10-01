import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Project as ProjectType } from './Types';
import Goals from './Views/Goals';
import Home from './Views/Home';
import Project from './Views/Project';

import projectsService from './Services/projects';

function App(): JSX.Element {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const getProjects = async (): Promise<void> => {
      const res = await projectsService.getAll();
      setProjects(res);
    };
    getProjects();
  }, []);

  const match = useRouteMatch<{ id: string }>('/project/:id');
  const project = match
    ? projects.find((proj) => {
        return String(proj.id) === match.params.id;
      })
    : null;

  return (
    <Switch>
      <Route path="/project/:id">
        <Project project={project || null} />
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
