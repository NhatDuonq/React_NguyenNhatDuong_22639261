import React, { useEffect, useState } from "react";
import "../App.css";
import OverviewCard from "../components/OverviewCard";
import DataTable from "../components/DataTable";
import MenuBar from "../components/MenuBar";

export default function AdminPage() {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/overView").then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/customer").then((res) =>
      res.json().then((data) => setDataTable(data))
    );
  }, []);

  return (
    <>
      <div className="flex">
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
          <DataTable dataTables={dataTable} />
        </div>
      </div>
    </>
  );
}
