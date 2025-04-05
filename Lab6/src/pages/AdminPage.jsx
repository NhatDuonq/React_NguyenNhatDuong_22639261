import React, { useEffect, useState } from "react";
import "../App.css";
import OverviewCard from "../components/OverviewCard";
import DataTable from "../components/DataTable";

export default function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://67ed0d2a4387d9117bbc0752.mockapi.io/overview").then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);

  return (
    <>
      <div class="flex">
        <div class="w-80  bg-blue-200 p-4">
          <div class="space-y-2">
            <div class="text-black">Link 1</div>
            <div class="text-black">Link 2</div>
            <div class="text-black">Link 3</div>
            <img src="/react.svg" alt="" />
          </div>
        </div>

        <div class="flex-1">
          <div class="bg-blue-100 p-5">
            <h1 class="text-xl font-bold text-center">My Header</h1>
          </div>

          <h2 class="text-lg font-semibold">Overview</h2>
          <br />
          <div className="flex justify-center items-center">
            <OverviewCard data={data} />
          </div>

          <br />
          <div>
            <h2 class="text-lg font-semibold">Detail report</h2>
          </div>
          <DataTable />
        </div>
      </div>
    </>
  );
}
