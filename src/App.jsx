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

    let content;
    if (projectstate.selectedProjectId === null){
      content = <NewProject/>
    }else if (projectstate.selectedProjectId === undefined){
      content= <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject}/>
      
    </main> 
  );
}

export default App;
