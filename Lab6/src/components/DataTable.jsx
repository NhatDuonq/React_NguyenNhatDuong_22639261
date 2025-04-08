import React, { useEffect, useState } from "react";

export default function DataTable({ dataTables }) {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    setDataTable(dataTables);
  }, [dataTables]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleEdit = (id) => () => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleSave = (updatedItem) => {
    setDataTable((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    handleCloseModal();
  };

  return (
    <>
      <div className="rounded-lg bg-white shadow-md p-5 mt-5">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4">
                <input type="checkbox" />
              </th>
              <th className="py-4">Customer Name</th>
              <th className="py-4">Company</th>
              <th className="py-4">Order Value</th>
              <th className="py-4">Order Date</th>
              <th className="py-4">Status</th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-4">
                  <input type="checkbox" className="ml-5" />
                </td>
                <td className="py-4 flex items-center">
                  <img
                    src={item.img_url}
                    alt=""
                    className=" w-10 h-10 rounded-full object-cover mr-5"
                  />
                  {item.customer_name}
                </td>
                <td className="py-4">{item.company}</td>
                <td className="py-4">{item.order_value}</td>
                <td className="py-4">{item.order_date}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "New"
                        ? "bg-blue-100 text-blue-600"
                        : item.status === "In-progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : item.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4">
                  <img
                    src="/img/create.png"
                    alt="Edit"
                    onClick={handleEdit(item.id)}
                    className="cursor-pointer w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <EditModal
          id={selectedId}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

function EditModal({ id, onSave, onClose }) {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/customer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/customer/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      onSave(formData);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (loading) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">
          Edit Customer{" "}
          <span className="text-xl text-gray-400">(id: {id})</span>
        </h2>
        <form onSubmit={handleSubmit}>
          {["customer_name", "company", "order_value", "order_date"].map(
            (field) => (
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
                />
              </div>
            )
          )}
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
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
