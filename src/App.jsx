import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [projectstate, setProjectstate] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectstate((prevSate) => {
      return {
        ...prevSate,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectstate((prevSate) => {
      return {
        ...prevSate,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectstate((prevSate) => {
      return {
        selectedProjectId: null,
        ...prevSate,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectstate((prevSate) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevSate,
        selectedProjectId: undefined,
        projects: [...prevSate.projects, newProject],
      };
    });
  }

  const selectedProject = projectstate.projects.find(
    project => project.id === projectstate.selectedProjectId
  );

  let content = <SelectedProjects project={selectedProject} />;

  if (projectstate.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
    );
  } else if (projectstate.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onSelectProject={handleStartAddProject}
        onStartAddProject={handleStartAddProject}
        projects={projectstate.projects}
      />
      {content}
    </main>
  );
}

export default App;
