import ProjectSideBar from "./components/ProjectSideBar"
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar/>
      <NoProjectSelected/>
    </main> 
  );
}

export default App;
