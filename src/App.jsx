import ProjectSideBar from "./components/ProjectSideBar"
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar/>
      <NewProject/>
    </main> 
  );
}

export default App;
