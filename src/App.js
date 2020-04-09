import React, { useEffect } from 'react';
import './App.css';
import { userRef } from './firebase';
import signUp from './services/signUp';
import signIn from './services/signIn';

function App () {

  useEffect(() => {
    userRef.push({
      email: 'pavan1@gmail.com',
      password: 'password1'
    });
  }, []);

  const onSignUp = () => {
    signUp('pavan3@gmail.com', 'password1');
  }

  const onSignIn = () => {
    signIn('pavan3@gmail.com', 'password1');
  }

  return (
    <div className="App">
      <button onClick={() => onSignUp()}>Sign Up</button>
      <button onClick={() => onSignIn()}>Sign In</button>
    </div>
  );
}

export default App;
