import React, { useState } from 'react'

function Itemscard({ item }) {

  console.log("item", item)



  return (
    <li className="item">
      <h4>this is items card</h4>
      <p>Price</p>
    </li>
  );
}

export default Itemscard;