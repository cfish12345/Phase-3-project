import React, { useState, useEffect } from 'react';
import Itemslist from './Itemslist';

function Items() {

    const [items, setItems] = useState([])
    const [itemTitle, setItemTitle] = useState("")

    useEffect(() => {
        fetch('http://localhost:9393/items')
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, []);

    console.log("items", items)

    const handleAddItem = (e) => {
        e.preventDefault()
        let newItem = {item: {title: {itemTitle}}}
  
        fetch('http://localhost:9393/items', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(newItem)
        })
        .then(resp => resp.json())
        .then(data => setItems([...items, data]))
      }

    const handleItemChange = (e) => {
      setItemTitle({name: e.target.value})
    }
  


    return (
        <main>
            <Itemslist items={items}/>
            <p style={{color: 'white', fontSize: '20px'}}>These are the current Items we are hunting!</p>
            <input onChange={handleItemChange} type="text" id="form"/>
            <button onClick={handleAddItem} class="item button">Add an Item</button>
        </main>
    );
}

export default Items;