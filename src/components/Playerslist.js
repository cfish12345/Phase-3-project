import React, { useState, useEffect } from 'react'
import Playerscard from './Playerscard'

const Playerslist = ({ players }) => {
  return (
    <ul className="items">
        {players.map(player => <Playerscard player={player} key={player.id}/>)}
    </ul>
  )
}

export default Playerslist