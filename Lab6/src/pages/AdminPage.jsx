import React, { useEffect, useState } from "react";
import "../App.css";
import OverviewCard from "../components/OverviewCard";
import DataTable from "../components/DataTable";
import MenuBar from "../components/MenuBar";

export default function AdminPage() {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddCustomer = (newCustomer) => {
    setDataTable((prev) => [...prev, newCustomer]);
  };

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

  const totalPages = Math.ceil(dataTable.length / itemsPerPage);
  const displayedData = dataTable.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <div className="flex ml-5 mt-5 mb-5">
            <img src="/img/Squares four 1.png" alt="" />
            <h2 className="text-xl font-bold ml-3">Overview</h2>
          </div>

          <br />
          <div className="flex justify-center items-center">
            <OverviewCard data={data} />
          </div>

          <br />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex ml-5">
              <img src="/img/File text 1.png" alt="" />
              <h2 className="text-xl font-bold ml-3">Detail Report </h2>
            </div>
            <div className="flex justify-end items-center mr-5 mt-5">
              <button
                onClick={handleAdd}
                className="flex mr-10 items-center text-pink-500 px-4 py-2 rounded-lg font-semibold text-xl border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300"
              >
                <img src="/img/add.png" alt="" className="h-5 w-5 mr-2" />
                Add
              </button>
              <button className="flex mr-10 items-center text-pink-500 px-4 py-2 rounded-lg font-semibold text-xl border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
                <img src="/img/Download.png" alt="" className="h-5 w-5 mr-2" />
                Import
              </button>
              <button className="flex items-center text-pink-500 px-4 py-2 rounded-lg font-semibold text-xl border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
                <img src="/img/Move up.png" alt="" className="h-5 w-5 mr-2" />
                Export
              </button>
            </div>
          </div>

          <DataTable dataTables={displayedData} />
          <div className="flex grid grid-cols-2 itéms-center justify-between">
            <span className="text-gray-500 font-medium mt-5">
              Total Users: {dataTable.length}
            </span>
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === page
                        ? "bg-pink-500 text-white"
                        : "bg-white text-pink-500 border-pink-500"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {isAddModalOpen && (
        <AddModal onClose={handleCloseAddModal} onAdd={handleAddCustomer} />
      )}
    </>
  );
}

function AddModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    customer_name: "",
    company: "",
    order_value: "",
    order_date: "",
    status: "New",
    img_url: "https://i.pravatar.cc/100",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const newCustomer = await res.json();
      onAdd(newCustomer);
      onClose();
    } catch (err) {
      console.error("Failed to add customer", err);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          {"customer_name,company,order_value,order_date"
            .split(",")
            .map((field) => (
              <div className="mb-4" key={field}>
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace("_", " ")}
                </label>
                <input
                  type={field === "order_date" ? "date" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            ))}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
