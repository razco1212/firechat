
import React from 'react'

const ChatHeader = ({ room, user }) => {
    const img = user?.photoURL || 'https://via.placeholder.com/150';
    return (
         
        <header>
            <div>
                <h2>Wellcome to: {room}</h2>
                <p>Hi {user?.displayName}</p>
            </div>
            <img src={user?.photoURL} alt={user?.displayName} className='imguser'/>
        </header>
        
    )
}

export default ChatHeader