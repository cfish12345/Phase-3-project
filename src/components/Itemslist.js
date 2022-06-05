import React, { useState } from 'react'
import Itemscard from './Itemscard'

function Itemslist({ items }) {

  

  return (
    <ul className="items">
        {items.map(item => <Itemscard item={item} key={item.id}/>)}
    </ul>
  );
}

export default Itemslist;