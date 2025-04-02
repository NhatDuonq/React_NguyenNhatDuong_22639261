import React from "react";
import "../App.css";

export default function AdminPage() {
  return (
    <>
      <div class="flex">
        <div class="w-64  bg-blue-200 p-4">
          <div class="space-y-2">
            <div class="text-black">Link 1</div>
            <div class="text-black">Link 2</div>
            <div class="text-black">Link 3</div>
            <img src="/react.svg" alt="" />
          </div>
        </div>

        <div class="flex-1">
          <div class="bg-blue-100 p-4">
            <h1 class="text-xl font-bold text-center">My Header</h1>
          </div>

          <h2 class="text-lg font-semibold">Overview</h2>
          <br />
          <div className="flex justify-center gap-20">
            <div className="bg-red-500 h-80 w-80">
              <img src="/react.svg" alt="" className="h-full w-full" />
            </div>
            <div className="bg-blue-500 h-80 w-80">
              <img src="/react.svg" alt="" className="h-full w-full" />
            </div>
            <div className="bg-green-500 h-80 w-80">
              <img src="/react.svg" alt="" className="h-full w-full" />
            </div>
          </div>

          <br />
          <div>
            <h2 class="text-lg font-semibold">Detail report</h2>
          </div>

          <table className="border-1  w-full text-center">
            <tr>
              <th className="border-1">Column 1</th>
              <th className="border-1">Column 2</th>
              <th className="border-1">Column 3</th>
              <th className="border-1">Column 4</th>
              <th className="border-1">Column 5</th>
            </tr>
            <tr>
              <td className="border-1">Row 1, Col 1</td>
              <td className="border-1">Row 1, Col 2</td>
              <td className="border-1">Row 1, Col 3</td>
              <td className="border-1">Row 1, Col 4</td>
              <td className="border-1">Row 1, Col 5</td>
            </tr>
            <tr>
              <td className="border-1">Row 2, Col 1</td>
              <td className="border-1">Row 2, Col 2</td>
              <td className="border-1">Row 2, Col 3</td>
              <td className="border-1">Row 2, Col 4</td>
              <td className="border-1">Row 2, Col 5</td>
            </tr>
            <tr>
              <td className="border-1">Row 3, Col 1</td>
              <td className="border-1">Row 3, Col 2</td>
              <td className="border-1">Row 3, Col 3</td>
              <td className="border-1">Row 3, Col 4</td>
              <td className="border-1">Row 3, Col 5</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
