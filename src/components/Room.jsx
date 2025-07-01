import React from 'react';
import LogoutButton from './LogoutButton';

const Room = ({ setRoom, setIsUser }) => {
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        setRoom(e.target.roomName.value);
      }}>
        <br />
        <h2>Enter Room Name</h2>
        <input type="text" name="roomName" placeholder='Room name?' />
        <br />
        
        <br />
        <button type="submit">Start Chatting</button>
        <br />
        <br />
      </form>
      <LogoutButton setRoom={setRoom} setIsUser={setIsUser} />
    </>
  );
};

export default Room;
