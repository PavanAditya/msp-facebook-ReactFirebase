import React, { useState } from 'react';
import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import NewsFeed from './components/home/NewsFeed';
import Header from './components/core/Header';
import { firebaseApp } from './firebase';

function App () {

  const [stage, setStage] = useState('');
  const [signUpSignIn, setSignUpSignIn] = useState('SI');

  const changeState = (value) => {
    setSignUpSignIn(value);
  }

  firebaseApp.auth().onAuthStateChanged(function (data) {
    if (data) {
      console.log(data.uid);
      setStage('authorized');
      setSignUpSignIn('SI');
    } else {
      console.log('No User Logged in');
      setStage('unAuthorized');
    }
  });

  return (
    <div className="App">
      <Header stage={stage} />
      {stage === 'authorized' && <NewsFeed />}
      {stage === 'unAuthorized' && signUpSignIn === 'SI' && <SignIn changeState={changeState} />}
      {stage === 'unAuthorized' && signUpSignIn === 'SU' && <SignUp changeState={changeState} />}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
