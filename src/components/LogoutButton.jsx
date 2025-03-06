import React from 'react'
import Cookies from 'universal-cookie'
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';


const cookies = new Cookies();

const LogoutButton = ({setIsUser, setRoom}) => {
    const LogOut =async () => {

        await signOut(auth);
        cookies.remove('chatuser')
        setIsUser(false);
        setRoom(null);
    }
return (
    
    <button  onClick={LogOut} id='loguot'>Logout</button>
    
)
}

export default LogoutButton