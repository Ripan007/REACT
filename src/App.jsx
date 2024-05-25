import React, { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './NoProjectSelected';
import ProjectSideBar from './components/ProjectsideBar';

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectedId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return { ...prevState, selectedProjectedId: null };
    });
  }

  let content;
  if (projectsState.selectedProjectedId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectedId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

    return (
      <main className="h-screen my-8 flex gap-8 ">
        <ProjectSideBar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    );
  }
}
