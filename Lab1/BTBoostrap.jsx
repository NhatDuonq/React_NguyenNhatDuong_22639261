import React, { useState } from 'react';

export default function BTBoostrap() {
  const [color, setColor] = useState("");

  function changeColor(e) {
    if (e.target.className.includes("blue")) {
      setColor("blue");
    }
  }

  return (
    <>
      <button 
        className="blue" 
        onClick={changeColor} 
        style={{ backgroundColor: color }}
      >
        Click me
      </button>
    </>
  );
}
