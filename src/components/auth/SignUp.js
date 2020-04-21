import React, { useState } from 'react';
import { TextField, Button, Icon } from '@material-ui/core';
import '../css/SignUp.css';
import signUp from '../../services/signUp';

const SignUp = (props) => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        password: '',
        about: ''
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
            <div className="outerBox outerBox-mobile">
                <h3>Sign Up</h3>
                <form noValidate autoComplete="off">
                    <TextField variant="outlined" id="firstName" onChange={e => onChangeText('firstName', e.target.value)} label="First Name"></TextField>
                    <TextField variant="outlined" id="lastName" onChange={e => onChangeText('lastName', e.target.value)} label="Last Name"></TextField>
                    <TextField variant="outlined" id="phNum" onChange={e => onChangeText('mobileNumber', e.target.value)} label="Phone Number" maxLength="10"></TextField>
                    <TextField variant="outlined" id="email" onChange={e => onChangeText('email', e.target.value)} label="Email"></TextField>
                    <TextField variant="outlined" type="password" id="pwd" onChange={e => onChangeText('password', e.target.value)} label="Password" />
                    <div className="bt-home">
                        <Button
                            variant="contained"
                            className="submit-button"
                            endIcon={<Icon>send</Icon>}
                            onClick={() => onSubmit()}
                        >
                            Sign Up
                        </Button>
                    </div>
                    <p align="center"> Already have an Account <span className="toggle-class" onClick={() => { props.changeState('SI') }}>Sign In</span></p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;



// {
//     data.firstName.length >= 3
//     ? <TextField variant="outlined" id="firstName" onChange={e => onChangeText('firstName', e.target.value)} label="First Name"></TextField>
//     : <TextField error id="outlined-error-helper-text" label="First Name" helperText="Invalid First Name" variant="outlined" />
// }
// <TextField variant="outlined" id="lastName" onChange={e => onChangeText('lastName', e.target.value)} label="Last Name"></TextField>
// {
//     data.mobileNumber.length === 10
//     ? <TextField variant="outlined" id="phNum" onChange={e => onChangeText('mobileNumber', e.target.value)} label="Phone Number" maxLength="10"></TextField>
//     : <TextField error id="outlined-error-helper-text" label="Phone Number" helperText="Invalid Phone Number" variant="outlined" />
// }
// {
//     data.email.length >= 3
//     ? <TextField variant="outlined" id="email" onChange={e => onChangeText('email', e.target.value)} label="Email"></TextField>
//     : <TextField error id="outlined-error-helper-text" label="Email" helperText="Invalid Email" variant="outlined" />
// }
// {
//     data.password.length >= 6
//     ? <TextField variant="outlined" type="password" id="pwd" onChange={e => onChangeText('password', e.target.value)} label="Password" />
//     : <TextField error id="outlined-error-helper-text" label="Password" helperText="Invalid Password" variant="outlined" />
// }