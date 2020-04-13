import React, { useState } from 'react';
import { TextInput, Button } from 'react-materialize';
import '../css/SignIn.css';
import signIn from '../../services/signIn';

const SignIn = (props) => {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const onChangeText = (key, value) => {
        const newData = { ...data };
        newData[key] = value;
        setData(newData);
    }

    const onSignIn = async () => {
        const result = signIn(data);
        if (result === true) {
            console.log('User SignedIn Successfully.');
        } else if (result === false) {
            console.log('User SignIn Failed');
        }
    }

    return (
        <div className="home">
            <div className="outerBox">
                <h4>Sign In</h4>
                <TextInput id="loginEmail" onChange={e => onChangeText('email', e.target.value)} label="Email"></TextInput>
                <TextInput type="password" id="password" onChange={e => onChangeText('password', e.target.value)} label="Password"></TextInput>
                <div className="bt-home">
                    <Button className="submit-button" waves="light" onClick={() => onSignIn()}>Sign In</Button>
                </div>
                <p align="center"> Already have an Account <span className="toggle-class" onClick={() => {props.changeState('SU')}}>Sign Up</span></p>
            </div>
        </div>
    );
}

export default SignIn;