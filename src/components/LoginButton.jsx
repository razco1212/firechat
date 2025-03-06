import React from 'react';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';



const cookies = new Cookies();

const LoginButton = ({ setIsUser }) => {
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log('welcome', result.user);
      cookies.set("chatuser", result.user.refreshToken);
      setIsUser(true);
    });
  };

  return (
    
      <button onClick={handleLogin} className="login-button">
        <div className="container">
          <img id="og" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google logo" />
          <span>Login</span>
        </div>
      </button>

  );
};

export default LoginButton;

