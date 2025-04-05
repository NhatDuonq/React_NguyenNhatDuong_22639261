import React from "react";

export default function DataTable({ dataTable }) {
  return (
    <>
      <div className="rounded-lg bg-white shadow-md p-5 mt-5">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-5">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="py-5">Customer Name</th>
              <th className="py-5">Company</th>
              <th className="py-5">Order Value</th>
              <th className="py-5">Order Date</th>
              <th className="py-5">Status</th>
              <th className="py-5"></th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-5">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="py-5 flex items-center">
                  <img src={item.img_url} alt="" className="pr-10" />
                  {item.customer_name}
                </td>
                <td className="py-5">{item.company}</td>
                <td className="py-5">{item.order_vaule}</td>
                <td className="py-5">{item.order_date}</td>
                <td className="py-5">
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
                <td className="py-5">
                  <img src="/img/create.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
