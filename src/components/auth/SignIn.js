import React, { useState } from 'react';
import { TextField, Button, Icon } from '@material-ui/core'
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
            <div className="outerBox outerBox-mobile">
                <h3>Sign In</h3>
                <form noValidate autoComplete="off">
                    <TextField variant="outlined" id="loginEmail" onChange={e => onChangeText('email', e.target.value)} label="Email"></TextField>
                    <TextField variant="outlined" type="password" id="password" onChange={e => onChangeText('password', e.target.value)} label="Password"></TextField>
                    <div className="bt-home">
                        <Button
                            variant="contained"
                            className="submit-button"
                            endIcon={<Icon>send</Icon>}
                            onClick={() => onSignIn()}
                        >
                            Sign In
                        </Button>
                    </div>
                    <p align="center"> Already have an Account <span className="toggle-class" onClick={() => { props.changeState('SU') }}>Sign Up</span></p>
                </form>
            </div>
        </div>
    );
}

export default SignIn;

// {
//     data['email'].length >= 3
//     ? <TextField variant="outlined" id="loginEmail" onChange={e => onChangeText('email', e.target.value)} label="Email" />
//     : <TextField error id="outlined-error-helper-text" label="Email" helperText="Invalid UserName" variant="outlined" />
// }
// {
//     data['password'].length >= 6
//     ? <TextField variant="outlined" type="password" id="password" onChange={e => onChangeText('password', e.target.value)} label="Password" />
//     : <TextField error id="outlined-error-helper-text" label="Password" helperText="Invalid Password" variant="outlined" />
// }