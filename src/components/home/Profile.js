import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import { Icon } from 'react-materialize';
import { userRef, firebaseApp } from '../../firebase';

const Profile = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(true);
    const [contact, setContact] = useState('');
    const [about, setAbout] = useState('');
    const [uid, setUid] = useState('');


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
                <div style={{ cursor: 'pointer' }}><Icon>edit</Icon></div>
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
