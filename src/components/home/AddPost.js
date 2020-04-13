import React, { useState } from 'react';
import { Row, Textarea, Button } from 'react-materialize';
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
                <h6><b>What's on your mind?</b></h6>
                <Row style={{ marginBottom: 0 }}>
                    <Textarea
                        s={12}
                        id="writePost"
                        className="custom-textArea"
                        placeholder="Write something here..."
                        data-length={200}
                        defaultValue={content}
                        onInput={event => setContent(event.target.value)} />
                </Row>
                <div style={{ height: 0 }}>
                    <Button small waves="light"
                        style={{ background: '#385898', marginTop: -60 }}
                        onClick={AddingPost}>
                        Post
                        </Button>
                </div>
            </div>
        </div>
    );
}

export default AddPost;
