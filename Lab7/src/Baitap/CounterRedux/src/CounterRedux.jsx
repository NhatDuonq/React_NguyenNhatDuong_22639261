import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

export default function CounterRedux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-blue-200 text-gray-800">
      <h1 className="text-5xl font-bold mb-8">Redux Counter</h1>
      <div className="text-[120px] font-extrabold mb-10 drop-shadow-lg">
        {count}
      </div>
      <div className="flex gap-8">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-3xl transition shadow-md"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl text-3xl transition shadow-md"
        >
          -
        </button>
      </div>
    </div>
  );
}
