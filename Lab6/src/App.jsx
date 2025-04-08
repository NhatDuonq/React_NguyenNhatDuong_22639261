import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import AdminPage from "./pages/AdminPage";
import ProjectPage from "./pages/ProjectPage";
import TeamPage from "./pages/TeamPage";
import AnalyticPage from "./pages/AnalyticPage";
import MessengerPage from "./pages/MessengerPage";
import IntegrationPage from "./pages/IntegrationPage";
import Header from "./components/Header";

const path = {
  dashboard: "dashboard",
  projects: "projects",
  teams: "teams",
  analytics: "analytics",
  messengers: "messengers",
  integrations: "integrations",
};

function RootLayout() {
  return (
    <div className="flex">
      <MenuBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <AdminPage /> },
      { path: path.dashboard, element: <AdminPage /> },
      { path: path.projects, element: <ProjectPage /> },
      { path: path.teams, element: <TeamPage /> },
      { path: path.analytics, element: <AnalyticPage /> },
      { path: path.messengers, element: <MessengerPage /> },
      { path: path.integrations, element: <IntegrationPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
