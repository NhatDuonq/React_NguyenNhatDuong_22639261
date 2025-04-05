import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="w-80 bg-white p-4">
      <img src="/img/Image 1858.png" alt="" className="pb-10" />
      <div>
        <NavLink to="/dashboard" className="text-lg font-bold">
          {({ isActive }) => (
            <div
              className={`h-10 w-full rounded-lg flex items-center mb-6 ${
                isActive ? "bg-pink-500" : "bg-white"
              }`}
            >
              <img src="/img/Squares four 1.png" alt="" className="ml-5" />
              <span
                className={`ml-5 ${isActive ? "text-white" : "text-black"}`}
              >
                Dashboard
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to="/projects" className="text-lg font-bold">
          {({ isActive }) => (
            <div
              className={`h-10 w-full rounded-lg flex items-center mb-6 ${
                isActive ? "bg-pink-500" : "bg-white"
              }`}
            >
              <img src="/img/Folder.png" alt="" className="ml-5" />
              <span
                className={`ml-5 ${isActive ? "text-white" : "text-black"}`}
              >
                Projects
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to="/teams" className="text-lg font-bold">
          {({ isActive }) => (
            <div
              className={`h-10 w-full rounded-lg flex items-center mb-6 ${
                isActive ? "bg-pink-500" : "bg-white"
              }`}
            >
              <img src="/img/Groups.png" alt="" className="ml-5" />
              <span
                className={`ml-5 ${isActive ? "text-white" : "text-black"}`}
              >
                Teams
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to="/analytics" className="text-lg font-bold">
          {({ isActive }) => (
            <div
              className={`h-10 w-full rounded-lg flex items-center mb-6 ${
                isActive ? "bg-pink-500" : "bg-white"
              }`}
            >
              <img src="/img/Pie chart.png" alt="" className="ml-5" />
              <span
                className={`ml-5 ${isActive ? "text-white" : "text-black"}`}
              >
                Analytics
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to="/messengers" className="text-lg font-bold">
          {({ isActive }) => (
            <div
              className={`h-10 w-full rounded-lg flex items-center mb-6 ${
                isActive ? "bg-pink-500" : "bg-white"
              }`}
            >
              <img src="/img/Chat.png" alt="" className="ml-5" />
              <span
                className={`ml-5 ${isActive ? "text-white" : "text-black"}`}
              >
                Messenger
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to="/integrations" className="text-lg font-bold">
          {({ isActive }) => (
            <div
              className={`h-10 w-full rounded-lg flex items-center mb-6 ${
                isActive ? "bg-pink-500" : "bg-white"
              }`}
            >
              <img src="/img/Code.png" alt="" className="ml-5" />
              <span
                className={`ml-5 ${isActive ? "text-white" : "text-black"}`}
              >
                Integrations
              </span>
            </div>
          )}
        </NavLink>
        <div className="pt-10 h-full bg-blue-100 rounded-lg items-center mb-6 text-center">
          <img src="/img/Group.png" alt="" className="h-80" />
          <h1 className="font-bold text-2xl">V2.0 is available</h1>
          <button className="bg-white text-blue-500 border-1 border-blue-500 px-4 py-2 rounded-lg mt-5 hover:bg-blue-500 hover:text-white transition duration-300 mb-5 w-50">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
}
