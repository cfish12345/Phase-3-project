import React, { useState, useEffect } from 'react'
import Playerslist from './Playerslist'

const Players = () => {

    const [players, setPlayers] = useState([])
    const [playerTitle, setPlayerTitle] = useState("")

    useEffect(() => {
        fetch(`http://127.0.0.1:9393/players`, { mode: 'no-cors' })
        .then(resp => resp.json())
        .then(data => setPlayers(data))
    }, []);

    console.log("players", players)

    const handleAddPlayer = (e) => {
      e.preventDefault()
      let newPlayer = {player: {title: {playerTitle}}}

      fetch('http://localhost:9393/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newPlayer)
      })
      .then(resp => resp.json())
      .then(data => setPlayers([...players, data]))
    }

    const handlePlayerChange = (e) => {
      setPlayerTitle({name: e.target.value})
    }

  return (
    <main>
        <Playerslist players={players}/>
        <p style={{color: 'white', fontSize: '20px'}}>Here is a list of Players currently logged!</p>
        <input onChange={handlePlayerChange} type="text" id="form"/>
        <button onClick={handleAddPlayer} class="player button">Add a new Player</button>
    </main>
  )
}

export default Players