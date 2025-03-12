import React from 'react';

export default function Item({ text, image }) { // Destructuring props
  return (
    <div>
      <img src={image} alt="" height="200px" width="200px" />
      <br />
      <span style={{ margin: 40 }}>{text}</span>
      <button style={{backgroundColor:'pink'}}>Buy</button>
    </div>
  );
}