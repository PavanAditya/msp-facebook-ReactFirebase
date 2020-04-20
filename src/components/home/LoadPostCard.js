import React from 'react';
import { Grid } from '@material-ui/core';
import '../css/LoadPostCard.css'

const LoadPostCard = (post) => {
    return (
        <div style={{ marginTop: 25 }} className="singlePostBox">
            <div className="outerBox m10">
                <div className="load-box">
                    <Grid container>
                        <Grid className="load-col" s={1} m={1}>
                            <div className="loading card-image"></div>
                        </Grid>
                        <Grid className="load-col" s={11} m={11}>
                            <div className="loading card-title"></div>
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
