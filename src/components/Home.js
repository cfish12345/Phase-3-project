import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from "react-router-dom"; 

function Home() {

    const [bosses, setBosses] = useState([])
    const [bossTitle, setBossTitle] = useState("")

    useEffect(() => {
        fetch(`http://localhost:9393/bosses`, { mode: 'no-cors' })
        .then(resp => resp.json())
        .then(setBosses)
    }, []);

    console.log("bosses", bosses)

    const handleAddBoss = (e) => {
      e.preventDefault()
      let newBoss = {boss: {title: {bossTitle}}}

      fetch('http://localhost:9393/bosses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newBoss)
      })
      .then(resp => resp.json())
      .then(data => setBosses([...bosses, data]))
    }

    const handleBossChange = (e) => {
      setBossTitle({name: e.target.value})
    }

  return (
    <div className="home" >
      <Header />
      <p className="subtitle" style={{color: 'white', fontSize: '20px'}}> These are the current Bosses we are hunting!</p>
      <input onChange={handleBossChange} type="text" id="form"/>
      <button onClick={handleAddBoss} className="boss button">Add a Boss</button>
      <br></br>
    </div>
  )
}

export default Home;