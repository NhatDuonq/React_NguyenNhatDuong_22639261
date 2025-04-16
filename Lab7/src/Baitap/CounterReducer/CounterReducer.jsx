import { useState } from "react";
import { useReducer } from "react";

export default function CounterReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="text-9xl mb-10 text-center">
        {" "}
        <h1>{state.count}</h1>
      </div>
      <div>
        <button
          className="h-20 w-50 ml-10 bg-green-500 text-white rounded-lg mr-10"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <button
          className="h-20 w-50 bg-red-500 text-white rounded-lg"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
      </div>
    </div>
  );
}
