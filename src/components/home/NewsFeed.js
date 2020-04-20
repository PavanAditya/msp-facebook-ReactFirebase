import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Profile from './Profile';
import AddPost from './AddPost';
import '../css/NewsFeed.css';
import PostList from './PostList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    item: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const NewsFeed = () => {

    const classes = useStyles();


    return (
        <Grid container style={{ width: '100%', marginTop: 20 }} className={classes.root} spacing={2}>
            <Grid
                item
                xs={3}
            >
                <div className={classes.item}>
                    <Profile />
                </div>
            </Grid>
            <Grid
                item
                xs={7}
                style={{ paddingBottom: 0 }}
            >
                <div className={classes.item} style={{ paddingBottom: 0 }}>
                    <div className="post-feed" style={{ maxHeight: window.innerHeight - 140 }}>
                        <AddPost />
                        <PostList />
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={2}
            >
                <div className={classes.item} style={{ background: 'grey', color: 'white' }}>
                    Chat
                </div>
            </Grid>
        </Grid>
    );
}

export default NewsFeed;
