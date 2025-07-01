import React from 'react';
const Message = ({ message }) => {
  const img = message.photoURL || 'https://via.placeholder.com/150';
  return (
    <>
      <p>
        <img src={img} alt={message.user} className='msgimg'/>
        <b>{message.user}</b>
        :
      </p>
      <p className='msgtext'>
        {message.text}
      </p>
    </>
  )
}

export default Message;