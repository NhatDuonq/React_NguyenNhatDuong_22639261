import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4">
      <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>

      <div className="flex justify-end items-center">
        <div className="relative mr-5">
          <img
            src="/img/Search.png"
            alt="Search"
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
          />
          <input
            type="text"
            className="bg-gray-200 rounded-lg h-10 w-100 pl-10 pr-4 text-sm focus:outline-none"
            placeholder="Search..."
          />
        </div>
        <img src="/img/Bell 1.png" alt="" className="h-8 w-8 mr-5" />
        <img src="/img/Question 1.png" alt="" className="h-8 w-8 mr-5" />
        <img src="/img/Avatar (5).png " alt="" />
      </div>
    </div>
  );
}
