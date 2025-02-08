import NavBar from "./navbar/NavBar";
import MySprint from "./pages/MySprint";
import TaskList from "./pages/TasksList";
import Time from "./pages/Time";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<MySprint />} />
          <Route path="/currentTask" element={<TaskList />} />
          <Route path="/timeRemaining" element={<Time />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
