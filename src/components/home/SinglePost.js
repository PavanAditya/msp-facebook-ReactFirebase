/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../css/SinglePost.css'
import { Icon, Menu, MenuItem, IconButton, Grid } from '@material-ui/core';
import { userRef } from '../../firebase';
import deletePost from '../../services/deletePost';
import editPost from '../../services/editPost';

const SinglePost = ({ post, uid }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const onPostDelete = (postKey) => {
        const result = deletePost(postKey);
        console.log(result);
    };

    const onPostEdit = (postKey) => {
        const result = editPost(postKey);
        console.log(result);
    };

    return (
        <div style={{ marginTop: 25 }} className="singlePostBox">
            <div className="outerBox m10">
                <div>
                    <div>
                        <Grid container style={{ display: 'flex', marginBottom: 10 }}>
                            <Grid item xs={2} sm={1} align="center">
                                <div className="post-block">
                                    <img
                                        src={require('../../assets/images/my-image.jpg')}
                                        alt="profile pic"
                                        height="40"
                                        style={{ borderRadius: 100 }}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={9} sm={10} style={{ marginLeft: 20, flex: 1, overflow: 'hidden' }}>
                                {loading ?
                                    <div className="loading post-title"></div> :
                                    <div className="post-acc-name">
                                        {firstName + ' ' + lastName}
                                    </div>}
                                <div style={{ fontSize: 12, color: 'gray' }}>
                                    {getTimeDifference(post?.createdDateTime)}
                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1}>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Icon>more_vert</Icon>
                                </IconButton>
                                {(uid === post.createdBy) ?
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={(e) => { e.preventDefault(); onPostEdit(post?.key); handleClose() }}>Edit</MenuItem>
                                        <MenuItem onClick={(e) => { e.preventDefault(); onPostDelete(post?.key); handleClose() }}>Delete</MenuItem>
                                    </Menu>
                                    :
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Hide</MenuItem>
                                        <MenuItem onClick={handleClose}>Spam</MenuItem>
                                    </Menu>
                                }
                            </Grid>
                        </Grid>
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