import React, { useState, useLayoutEffect } from 'react';
import { Grid, makeStyles, Icon } from '@material-ui/core';
import Profile from './Profile';
import AddPost from './AddPost';
import '../css/NewsFeed.css';
import PostList from './PostList';
import Chat from './Chat';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    item: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }
}));

const NewsFeed = () => {

    const [view, setView] = useState('PostsView');
    const [size, setSize] = useState([0, 0]);

    const useWindowSize = () => {
        useLayoutEffect(() => {
            function updateSize () {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [width, height] = useWindowSize();

    const toggleView = (viewName) => {
        console.log(viewName);
        setView(viewName);
        GetView();
    }

    const ProfileView = () => {
        return (
            <Grid
                item
                xs={12}
                sm={3}
            >
                <div className={classes.item}>
                    <Profile />
                </div>
            </Grid>
        );
    }

    const PostsView = () => {
        return (
            <Grid
                item
                xs={12}
                sm={7}
                style={{ paddingBottom: 0 }}
            >
                <div className={classes.item} style={{ paddingBottom: 0 }}>
                    <div className="post-feed">
                        <div style={{ maxHeight: width > 768 ? height - 111 : 'none' }}>
                            <AddPost />
                            <PostList />
                            <p style={{ paddingBottom: 25 }}></p>
                        </div>
                    </div>
                </div>
            </Grid >
        );
    }

    const ChatView = () => {
        return (
            <Grid
                item
                xs={12}
                sm={2}
            >
                <div className={classes.item}>
                    <Chat />
                </div>
            </Grid>
        );
    }

    const GetView = () => {
        if (view === 'ProfileView') {
            return (<div>{ProfileView()}</div>);
        } else if (view === 'ChatView') {
            return (<div>{ChatView()}</div>);
        } else {
            return (<div>{PostsView()}</div>);
        }
    }

    const classes = useStyles();
    return (
        <div>
            <div className="web-toggle">
                <Grid container style={{ width: '100%' }} className={classes.root} spacing={2}>
                    {ProfileView()}
                    {PostsView()}
                    {ChatView()}
                </Grid>
            </div>
            <div className="mobile-toggle">
                <Grid container className="nav-icons">
                    <Grid item xs={4} sm={4} align="center" onClick={() => toggleView('ProfileView')}
                        className={view === 'ProfileView' ? 'selected-tab' : 'un-selected-tab'}
                        style={{ cursor: 'pointer', padding: 10, borderRadius: 5 }}>
                        <Icon>account_circle</Icon>
                    </Grid>
                    <Grid item xs={4} sm={4} align="center" onClick={() => toggleView('PostsView')}
                        className={view === 'PostsView' ? 'selected-tab' : 'un-selected-tab'}
                        style={{ cursor: 'pointer', padding: 10, borderRadius: 5 }}>
                        <Icon>home</Icon>
                    </Grid>
                    <Grid item xs={4} sm={4} align="center" onClick={() => toggleView('ChatView')}
                        className={view === 'ChatView' ? 'selected-tab' : 'un-selected-tab'}
                        style={{ cursor: 'pointer', padding: 10, borderRadius: 5 }}>
                        <Icon>chat</Icon>
                    </Grid>
                </Grid>
                <Grid container style={{ width: '100%' }} className={classes.root} spacing={2}>
                    <div style={{ marginTop: 150, marginBottom: 50, width: '99%' }}>
                        {GetView()}
                    </div>
                </Grid>
            </div>
        </div>
    );
}

export default NewsFeed;
