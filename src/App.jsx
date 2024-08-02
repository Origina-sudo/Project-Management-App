import ProjectSideBar from "./components/ProjectSideBar"
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
const [projectstate, setProjectstate] = useState({
  selectedProjectId: undefined,
  projects: []
})

function handleStartAddProject(){
      setProjectstate(prevSate => {  
       return{
        selectedProjectId: null,
        ...prevSate,
        selectedProjectId : null,
       }
      });
}

function handleAddProject(projectData){
    setProjectstate(prevSate=>{
      const newProject ={
          ...projectData,
          id: Math.random()
      };

      return{
        ...prevSate,
        selectedProjectId:undefined,
        projects: [...prevSate.projects, newProject]
      };
    });

}

    let content;

    if (projectstate.selectedProjectId === null){
      content = <NewProject onAdd={handleAddProject}/>
    }else if (projectstate.selectedProjectId === undefined){
      content= <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
      onStartAddProject={handleStartAddProject}
       projects={projectstate.projects}/>
      {content}
      
    </main> 
  );
}

export default App;
