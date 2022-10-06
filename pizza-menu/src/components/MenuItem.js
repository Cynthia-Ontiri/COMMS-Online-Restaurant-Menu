import React from "react";
import '../../src/components/styles/Menu.css'

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p> {name} </p>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;
