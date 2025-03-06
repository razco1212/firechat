import React from 'react'

const ExitRoomButton = ({setRoom}) => {
  return (
    <button onClick={ ()=> setRoom(null)}>Exit</button>
  )
}

export default ExitRoomButton