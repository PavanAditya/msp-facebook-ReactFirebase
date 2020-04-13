import React, { useState, useEffect } from 'react';
import '../css/SinglePost.css'
import { Dropdown, Button, Icon } from 'react-materialize';
import { userRef } from '../../firebase';

const SinglePost = ({ post, uid }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getName = () => {
            userRef.child(post?.createdBy).once('value', snapshot => {
                setFirstName(snapshot.val()['firstName']);
                setLastName(snapshot.val()['lastName']);
                setLoading(false);
            })
        }
        if (post.createdBy) {
            getName();
        }
    }, [post]);

    const getTimeDifference = (endDate) => {
        const diffMs = (new Date() - endDate);
        const diffDays = Math.floor(diffMs / 86400000);
        const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
        if (diffDays > 0) {
            return diffDays === 1 ? diffDays + ' day ago' : diffDays + ' days ago';
        }
        if (diffHrs > 0) {
            return diffHrs === 1 ? diffHrs + ' hour ago' : diffHrs + ' hours ago';
        }
        return diffMins === 1 ? diffMins + ' min ago' : diffMins + ' mins ago';
    }

    return (
        <div style={{ marginTop: 25 }} className="singlePostBox">
            <div className="outerBox m10">
                <div>
                    <div>
                        <div style={{ display: 'flex', marginBottom: 10 }}>
                            <div>
                                <div className="post-block">
                                    <img
                                        src={require('../../assets/images/my-image.jpg')}
                                        alt="profile pic"
                                        height="40"
                                        style={{ borderRadius: 100 }}
                                    />
                                </div>
                            </div>
                            <div style={{ marginLeft: 20, flex: 1, overflow: 'hidden' }}>
                                {loading ?
                                    <div className="loading post-title"></div> :
                                    <div className="post-acc-name">
                                        {firstName + ' ' + lastName}
                                    </div>}
                                <div style={{ fontSize: 12, color: 'gray' }}>
                                    {getTimeDifference(post?.createdDateTime)}
                                </div>
                            </div>
                            <div>
                                {(uid === post.createdBy) ?
                                    <Dropdown
                                        id={post?.key + 'y'}
                                        options={{
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            container: null,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                        }}
                                        trigger={
                                            <Button flat node="button">
                                                <Icon>more_vert</Icon>
                                            </Button>
                                        }>
                                        <a href="w" style={{ color: 'black' }}>
                                            Edit
                                        </a>
                                        <a href="w" style={{ color: 'black' }}>
                                            Delete
                                        </a>
                                    </Dropdown> :
                                    <Dropdown
                                        id={post?.key + 'n'}
                                        options={{
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            container: null,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                        }}
                                        trigger={
                                            <Button flat node="button">
                                                <Icon>more_vert</Icon>
                                            </Button>
                                        }>
                                        <a href="w" style={{ color: 'black' }}>
                                            Hide
                                        </a>
                                        <a href="w" style={{ color: 'black' }}>
                                            Spam
                                        </a>
                                    </Dropdown>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        {post?.content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;
