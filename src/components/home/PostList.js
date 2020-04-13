import React, { useEffect, useState } from 'react';
import { postRef, firebaseApp } from '../../firebase';
import SinglePost from './SinglePost';
import LoadPostCard from './LoadPostCard';

const PostList = () => {

    const load = [
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: 4 }
    ];

    const [posts, setPosts] = useState([]);
    const [myUid, setMyUid] = useState('');
    const [loading, setLoading] = useState(true);

    const snapshotToArray = (snapshot) => {
        var returnArr = [];
        snapshot.forEach((childSnapshot) => {
            returnArr.push({
                ...childSnapshot.val(),
                key: childSnapshot.key
            });
        });
        return returnArr;
    };

    useEffect(() => {
        const getAllPosts = () => {
            let posts;
            postRef.on('value', (snapshot) => {
                posts = snapshotToArray(snapshot);
                console.log(snapshotToArray(snapshot));
                posts.reverse();
                setPosts(posts);
                setLoading(false);
                setMyUid(firebaseApp.auth().currentUser.uid);
            });
        }
        getAllPosts();
    }, []);

    return (
        <div style={{ color: 'black' }}>
            {loading ?
                load.map((item, i) =>
                    <div key={i}>
                        <LoadPostCard post={item} />
                    </div>
                ) :
                posts?.map((item, i) =>
                    <div key={i}>
                        <SinglePost post={item} uid={myUid} />
                    </div>
                )}
        </div>
    );
}

export default PostList;
