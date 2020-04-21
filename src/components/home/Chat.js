import React, { useState } from 'react';
import { Icon, Grid } from '@material-ui/core';
import ResponsiveDialog from '../shared/ResponsiveDialog';

const Chat = () => {
    const [open, setOpen] = useState(false);

    const Header = () => {
        return (
            <span><b>{'Chat'}</b></span>
        );
    }
    const Body = () => {
        return (
            <span>{'Chat Feature Yet to come 😁😁'}</span>
        );
    }
    const Footer = () => {
        return (
            <span>{' '}</span>
        );
    }
    const callModal = () => {
        setOpen(true);
    }

    return (
        <div className="outerBox m10">
            <Grid container style={{ color: 'black' }}>
                <Grid item xs={10}><b>Chat</b></Grid>
                <Grid item xs={2} style={{ cursor: 'pointer' }}><Icon style={{ fontSize: 20 }} onClick={callModal}>chat</Icon></Grid>
            </Grid>
            <ResponsiveDialog Header={Header} Body={Body} Footer={Footer} open={open} setOpen={setOpen} />
        </div>
    );
}

export default Chat;
