import React, { useState, useEffect } from 'react';
import { Icon, Button, TextField } from '@material-ui/core';
import { userRef, firebaseApp } from '../../firebase';
import ResponsiveDialog from '../shared/ResponsiveDialog';
import '../css/Profile.css';

const Profile = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(true);
    const [contact, setContact] = useState('');
    const [about, setAbout] = useState('');
    const [open, setOpen] = useState(false);
    const [uid, setUid] = useState('');

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        about: '',
        school: '',
        diploma: '',
        degree: '',
        work: '',
        statusLine: ''
    });

    const onChangeText = (key, value) => {
        const newData = { ...data };
        newData[key] = value;
        setData(newData);
    }

    const onSubmit = () => {
        console.log('Edit Profile', data);
    }

    const Header = () => {
        return (
            <div><b>{'Edit Profile'}</b></div>
        );
    }

    const Body = () => {
        return (
            <div className="edit-profile-form">
                <form noValidate autoComplete="off">
                    <TextField variant="outlined" id="firstName" onChange={e => onChangeText('firstName', e.target.value)} label="First Name"></TextField>
                    <TextField variant="outlined" id="lastName" onChange={e => onChangeText('lastName', e.target.value)} label="Last Name"></TextField>
                    <TextField variant="outlined" id="phNum" onChange={e => onChangeText('mobileNumber', e.target.value)} label="Phone Number" maxLength="10"></TextField>
                    <TextField variant="outlined" id="email" onChange={e => onChangeText('email', e.target.value)} label="Email"></TextField>
                    <TextField variant="outlined" id="about" onChange={e => onChangeText('about', e.target.value)} label="Password" />
                    <TextField variant="outlined" id="school" onChange={e => onChangeText('school', e.target.value)} label="School" />
                    <TextField variant="outlined" id="diploma" onChange={e => onChangeText('diploma', e.target.value)} label="Diploma(+1, +2)" />
                    <TextField variant="outlined" id="degree" onChange={e => onChangeText('degree', e.target.value)} label="Degree" />
                    <TextField variant="outlined" id="work" onChange={e => onChangeText('work', e.target.value)} label="Work" />
                    <TextField variant="outlined" id="statusLine" onChange={e => onChangeText('statusLine', e.target.value)} label="Status" />
                </form>
            </div>
        );
    }

    const Footer = () => {
        return (
            <div>
                <Button
                    variant="contained"
                    className="submit-button"
                    endIcon={<Icon>send</Icon>}
                    onClick={() => onSubmit()}
                >
                    Submit
            </Button>
            </div>
        );
    }

    const callModal = () => {
        setOpen(true);
    }

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(function (data) {
            if (data) {
                setUid(data.uid);
                console.log(data);
                getName();
            }
        });
        const getName = () => {
            console.log(uid);
            if (uid) {
                userRef.child(uid).once('value', snapshot => {
                    console.log(snapshot.val());
                    setFirstName(snapshot.val()['firstName']);
                    setLastName(snapshot.val()['lastName']);
                    setContact(snapshot.val()['mobileNumber']);
                    setAbout(snapshot.val()['about']);
                    setLoading(false);
                })
            }
        }
    }, [uid]);

    return (
        <div className="outerBox m10 profileBox">
            <div style={{ display: 'flex', marginBottom: 10 }}>
                <div>
                    <div className="profile-block">
                        <img
                            src={require('../../assets/images/my-image.jpg')}
                            alt="profile pic"
                            height="40"
                            style={{ borderRadius: 100 }}
                        />
                    </div>
                </div>
                <div style={{ marginLeft: 10, flex: 1, fontSize: 'large' }}>
                    {loading ?
                        <div className="loading post-name"></div> :
                        <b><i>{firstName + ' ' + lastName}</i></b>
                    }</div>
                <div style={{ cursor: 'pointer' }}><Icon onClick={callModal}>edit</Icon></div>
                <ResponsiveDialog Header={Header} Body={Body} Footer={Footer} open={open} setOpen={setOpen} />
            </div>
            <div style={{ borderTop: '1px solid lightgray' }}>
                <div style={{ color: '#385898', marginTop: 10 }}>
                    Contact:
                </div>
                <div style={{ fontSize: 12 }}>
                    {loading ?
                        <div className="loading post-num"></div> :
                        contact
                    }
                </div>
                <div style={{ color: '#385898', marginTop: 10 }}>
                    About me:
                </div>
                <div style={{ fontSize: 12 }}>
                    {loading ?
                        <div className="loading post-about"></div> :
                        about}
                </div>
            </div>
        </div>
    );
}

export default Profile;
