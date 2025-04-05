import React, { useEffect, useState } from "react";
import "../App.css";
import OverviewCard from "../components/OverviewCard";
import DataTable from "../components/DataTable";

export default function AdminPage() {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    fetch("https://67ed0d2a4387d9117bbc0752.mockapi.io/overview").then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);

  useEffect(() => {
    fetch("https://67ed0d2a4387d9117bbc0752.mockapi.io/customer").then((res) =>
      res.json().then((data) => setDataTable(data))
    );
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-80 bg-blue-200 p-4">
          <div className="space-y-2">
            <div className="text-black">Link 1</div>
            <div className="text-black">Link 2</div>
            <div className="text-black">Link 3</div>
            <img src="/react.svg" alt="" />
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-blue-100 p-5">
            <h1 className="text-xl font-bold text-center">My Header</h1>
          </div>

          <h2 className="text-lg font-semibold">Overview</h2>
          <br />
          <div className="flex justify-center items-center">
            <OverviewCard data={data} />
          </div>

          <br />
          <div>
            <h2 className="text-lg font-semibold">Detail report</h2>
          </div>
          <DataTable dataTable={dataTable} />
        </div>
      </div>
    </>
  );
}
