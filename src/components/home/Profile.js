import React from 'react';
import '../css/Profile.css';
import { Icon } from 'react-materialize';

const Profile = () => {
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
                <div style={{ marginLeft: 10, flex: 1, fontSize: 'large' }}><b><i>Pavan Aditya M S</i></b></div>
                <div style={{ cursor: 'pointer' }}><Icon>edit</Icon></div>
            </div>
            <div style={{ borderTop: '1px solid lightgray' }}>
                <div style={{ color: '#385898', marginTop: 10 }}>
                    About me:
                    </div>
                <div style={{ fontSize: 12 }}>
                    MEAN Stack Engineer at Mindtree Ltd.
                    <br /> 20'Jul 97
                    <br /> Novelist
                    <br /> Movie Buff
                    <br /> Cricket 😍🤩
                    </div>
            </div>
        </div>
    );
}

export default Profile;
