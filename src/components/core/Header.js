import React from 'react';
import { AppBar, Icon, MenuItem, Typography, Toolbar, makeStyles } from '@material-ui/core';
import '../css/Header.css';
import { firebaseApp } from '../../firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({ stage }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className="nav-custom" position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {<a className="brand-logo" target="_" href="https://pavanaditya.com">
                            <img src={require('../../assets/images/fb-white-round.png')} alt="logo"
                                style={{ marginTop: '1px' }} height="60px" />
                        </a>}
                    </Typography>
                    {stage === 'authorized' &&
                        <MenuItem onClick={() => firebaseApp.auth().signOut()}>
                            <Icon>logout</Icon>
                        </MenuItem>}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
