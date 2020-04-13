import React, { useState } from 'react';
import { TextInput, Button } from 'react-materialize';
import '../css/SignUp.css';
import signUp from '../../services/signUp';

const SignUp = (props) => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        password: ''
    });

    const onChangeText = (key, value) => {
        const newData = { ...data };
        newData[key] = value;
        setData(newData);
    }

    const onSubmit = async () => {
        const result = signUp(data);
        if (result === true) {
            console.log('Account Created Successfully.');
        } else if (result === false) {
            console.log('Account Creation Failed');
        }
    }

    return (
        <div className="home">
            <div className="outerBox">
                <h4>Sign Up</h4>
                <TextInput id="firstName" onChange={e => onChangeText('firstName', e.target.value)} label="First Name"></TextInput>
                <TextInput id="lastName" onChange={e => onChangeText('lastName', e.target.value)} label="Last Name"></TextInput>
                <TextInput id="phNum" onChange={e => onChangeText('mobileNumber', e.target.value)} label="Phone Number" maxLength="10"></TextInput>
                <TextInput id="email" onChange={e => onChangeText('email', e.target.value)} label="Email"></TextInput>
                <TextInput id="pwd" onChange={e => onChangeText('password', e.target.value)} label="Password"></TextInput>
                <div className="bt-home">
                    <Button className="submit-button" waves="light" onClick={() => onSubmit()}>Sign Up</Button>
                </div>
                <p align="center"> Already have an Account <span className="toggle-class" onClick={() => { props.changeState('SI') }}>Sign In</span></p>
            </div>
        </div>
    );
}

export default SignUp;