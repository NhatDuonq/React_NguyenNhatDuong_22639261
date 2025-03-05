import React from 'react';

export default function Item({ text, image }) { // Destructuring props
  return (
    <div>
      <img src={image} alt="" height="200px" width="200px" />
      <br />
      <span style={{ margin: 10 }}>{text}</span>
      <button>Save</button>
    </div>
  );
}