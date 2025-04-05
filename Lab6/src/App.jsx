import "./App.css";
import AdminPage from "./pages/AdminPage";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import MenuBar from "./components/MenuBar";
import TeamPage from "./pages/TeamPage";
import AnalyticPage from "./pages/AnalyticPage";
import MessengerPage from "./pages/MessengerPage";
import IntegrationPage from "./pages/IntegrationPage";

function App() {
  return (
    <>
      <div className="flex">
        <MenuBar />
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/dashboard" element={<AdminPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/analytics" element={<AnalyticPage />} />
          <Route path="/messengers" element={<MessengerPage />} />
          <Route path="/integrations" element={<IntegrationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
