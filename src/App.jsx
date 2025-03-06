import { useState } from 'react'
import './App.css'
import LoginButton from './components/LoginButton'
import ChatInterface from './components/ChatInterface'
import Room from './components/Room';
import Cookies from 'universal-cookie';
import LogoutButton from './components/LogoutButton';


const cookies = new Cookies();
function App() {
  const [room, setRoom] = useState(null);
  const [isUser, setIsUser] = useState(cookies.get("chatuser"));



  return (
    <main>
      {/* <LogoutButton setRoom={setRoom } setIsUser={setIsUser } /> */}
      {

        isUser
          ? room
            ? 
            <div className='center'>
              <ChatInterface room={room} setRoom={setRoom} setIsUser={setIsUser}/>

            </div>
            : 
            <div className='center'>
              <Room setRoom={setRoom} setIsUser={setIsUser} />
            </div>
          :
          <div className='center'>
            <img id="lg" src="https://i.ibb.co/RzQM8pr/2025-01-16-211132-removebg-preview-1.png"  />

            <LoginButton setIsUser={setIsUser} />
          </div>

      }



    </main>
  )
}

export default App
