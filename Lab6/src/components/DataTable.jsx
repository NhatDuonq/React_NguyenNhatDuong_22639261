import React, { useState, useEffect } from "react";

export default function DataTable({ dataTables }) {
  const [dataTable, setDataTable] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setDataTable(dataTables);
  }, [dataTables]);

  const handleEdit = (item) => () => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
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
                    className=" w-10 h-10 rounded-full object-cover mr-10"
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
                    onClick={handleEdit(item)}
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
          item={selectedItem}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

function EditModal({ item, onSave, onClose }) {
  const [formData, setFormData] = useState({
    customer_name: item.customer_name,
    company: item.company,
    order_value: item.order_value,
    order_date: item.order_date,
    status: item.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = { ...item, ...formData };
    onSave(updatedItem);
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
        <h2 className="text-xl font-bold mb-4">
          Edit Customer{" "}
          <span className="text-xl text-gray-400">(id: {item.id})</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Value
            </label>
            <input
              type="text"
              name="order_value"
              value={formData.order_value}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Date
            </label>
            <input
              type="date"
              name="order_date"
              value={formData.order_date}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
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
