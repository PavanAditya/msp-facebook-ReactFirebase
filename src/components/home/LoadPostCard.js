import React from 'react';
import { Grid } from '@material-ui/core';
import '../css/LoadPostCard.css'

const LoadPostCard = (post) => {
    return (
        <div style={{ marginTop: 25 }} className="singlePostBox">
            <div className="outerBox m10">
                <div className="load-box">
                    <Grid container>
                        <Grid item className="load-col" sm={1} xs={2}>
                            <div className="loading card-image"></div>
                        </Grid>
                        <Grid item className="load-col" sm={7} xs={7}>
                            <div className="loading card-title"></div>
                        </Grid>
                        <Grid item sm={4} xs={3}>
                        </Grid>
                    </Grid>
                    <div className="loading card-desc">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadPostCard;
