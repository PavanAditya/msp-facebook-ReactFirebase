import React, { useState } from 'react';
import { Grid, Button, TextField, Icon } from '@material-ui/core';
import '../css/AddPost.css';
import addPost from '../../services/addPost';
import { firebaseApp } from '../../firebase';

const AddPost = () => {

    const [content, setContent] = useState('');

    const AddingPost = () => {
        if (content.length > 200) {
            return;
        }

        console.log(content)

        if (content === '') {
            console.log('Please write some content to post');
            return;
        }

        const uid = firebaseApp.auth().currentUser.uid;
        const result = addPost(uid, content);
        if (result === true) {
            setContent('');
            document.getElementById("writePost").value = '';
            console.log('Post Added Successfully');
        } else {
            console.log('Post Adding Failed')
        }
    }

    return (
        <div className="addPostBox">
            <div className="outerBox m10">
                <p style={{ fontSize: 15 }}><b>What's on your mind?</b></p>
                <Grid style={{ marginBottom: 0 }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write something here..."
                        multiline
                        rows={4}
                        variant="outlined"
                        xs={12}
                        className="custom-textarea"
                        placeholder="Write something here..."
                        data-length={200}
                        position="relative"
                        defaultValue={content}
                        onInput={event => setContent(event.target.value)} />
                </Grid>
                <div style={{ marginRight: 10 }} align="right">
                    <Button variant="contained" small waves="light"
                        className="submit-button"
                        onClick={AddingPost}
                        endIcon={<Icon>send</Icon>}>
                        Post
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddPost;
