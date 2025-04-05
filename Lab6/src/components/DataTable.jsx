import React from "react";

export default function DataTable() {
  return (
    <>
      <table className="table-auto w-full border-collapse border border-gray-200 m-2">
        <thead>
          <tr>
            <th className="py-6">
              <input type="checkbox" name="" id="" />
            </th>
            <th className="py-6">Customer Name</th>
            <th className="py-6">Company</th>
            <th className="py-6">Order Value</th>
            <th className="py-6">Order Date</th>
            <th className="py-6">Status</th>
            <th className="py-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-6">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="py-6 flex items-center">
              <img src="/img/Avatar (1).png" alt="" className="pr-10" />
              Elizabeth Lee
            </td>
            <td className="py-6">AvatarSystem</td>
            <td className="py-6">$359</td>
            <td className="py-6">10/07/2023</td>
            <td className="py-6">
              <span className="status status-new">New</span>
            </td>
            <td className="py-6">
              <img src="/img/create.png" alt="" />
            </td>
          </tr>
          <tr>
            <td className="py-6">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="py-6 flex items-center">
              <img src="/img/Avatar (2).png" alt="" className="pr-10" />
              Carlos Garcia
            </td>
            <td className="py-6">SnoozeShift</td>
            <td className="py-6">$747</td>
            <td className="py-6">24/07/2023</td>
            <td className="py-6">
              <span className="status status-new">New</span>
            </td>
            <td className="py-6">
              {" "}
              <img src="/img/create.png" alt="" />
            </td>
          </tr>
          <tr>
            <td className="py-6">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="py-6 flex items-center">
              <img src="/img/Avatar (3).png" alt="" className="pr-10" />
              Elizabeth Bailey
            </td>
            <td className="py-6">PrimeTime Telecom</td>
            <td className="py-6">$564</td>
            <td className="py-6">08/08/2023</td>
            <td className="py-6">
              <span className="status status-in-progress">In-progress</span>
            </td>
            <td className="py-6">
              {" "}
              <img src="/img/create.png" alt="" />
            </td>
          </tr>
          <tr>
            <td className="py-6">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="py-4 flex items-center">
              <img src="/img/Avatar (4).png" alt="" className="pr-10" />
              Ryan Brown
            </td>
            <td className="py-6">OmniTech Corporation</td>
            <td className="py-6">$541</td>
            <td className="py-6">31/08/2023</td>
            <td className="py-6">
              <span className="status status-in-progress">In-progress</span>
            </td>
            <td className="py-6">
              {" "}
              <img src="/img/create.png" alt="" />
            </td>
          </tr>
          <tr>
            <td className="py-6">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="py-4 flex items-center">
              <img src="/img/Avatar (5).png" alt="" className="pr-10" />
              Ryan Young
            </td>
            <td className="py-6">DataStream Inc.</td>
            <td className="py-6">$769</td>
            <td className="py-6">01/05/2023</td>
            <td className="py-6">
              <span className="status status-completed">Completed</span>
            </td>
            <td className="py-6">
              {" "}
              <img src="/img/create.png" alt="" />
            </td>
          </tr>
          <tr>
            <td className="py-6">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="py-4 flex items-center">
              <img src="/img/Avatar (6).png" alt="" className="pr-10" />
              Hailey Adams
            </td>
            <td className="py-6">FlowRush</td>
            <td className="py-6">$922</td>
            <td className="py-6">10/06/2023</td>
            <td className="py-6">
              <span className="status status-completed">Completed</span>
            </td>
            <td className="py-6">
              {" "}
              <img src="/img/create.png" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
