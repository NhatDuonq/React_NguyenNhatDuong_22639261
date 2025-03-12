import React from "react";

const Filter = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md mr-5 max-w-xs">
      <h2 className="text-2xl text-gray-700 mb-5 flex items-center">⚙️ FILTERS</h2>
      <div className="mb-5">
        <label className="text-lg text-gray-700 flex justify-between items-center mb-2">
          Type <span className="text-pink-600 text-sm">▼</span>
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="pan-fried"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Pan-fried
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="stir-fried"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Stir-fried
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="grilled"
              defaultChecked
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Grilled
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="roasted"
              defaultChecked
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Roasted
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="sauteed"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Sauteed
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="baked"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Baked
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="steamed"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Steamed
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              value="stewed"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            Stewed
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label className="text-lg text-gray-700 flex justify-between items-center mb-2">
          Time <span className="text-pink-600 text-sm">▼</span>
        </label>
        <div className="relative">
          <input
            type="range"
            min="30"
            max="50"
            defaultValue="40"
            className="w-full accent-pink-600 h-2"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>30 minutes</span>
            <span>50 minutes</span>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label className="text-lg text-gray-700 flex justify-between items-center mb-2">
          Rating <span className="text-pink-600 text-sm">▼</span>
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rating"
              value="5"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            ★★★★★
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rating"
              value="4"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            ★★★★☆
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rating"
              value="3"
              defaultChecked
              className="accent-pink-600 w-4 h-4"
            />{" "}
            ★★★☆☆
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rating"
              value="2"
              defaultChecked
              className="accent-pink-600 w-4 h-4"
            />{" "}
            ★★☆☆☆
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rating"
              value="1"
              className="accent-pink-600 w-4 h-4"
            />{" "}
            ★☆☆☆☆
          </label>
        </div>
      </div>
      <button className="w-full py-2 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 transition-colors">
        Apply
      </button>
    </div>
  );
};

export default Filter;