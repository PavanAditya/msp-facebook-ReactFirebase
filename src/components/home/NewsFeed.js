import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import Profile from './Profile';
import AddPost from './AddPost';
import '../css/NewsFeed.css';
import PostList from './PostList';

const NewsFeed = () => {
    return (
        <Container>
            <Row style={{ marginTop: 20 }}>
                <Col
                    className="white-text"
                    s={12}
                    m={3}
                >
                    <Profile />
                </Col>
                <Col
                    className="white-text post-feed"
                    s={12}
                    m={7}
                >
                    <AddPost />
                    <PostList />
                </Col>
                <Col
                    className="grey white-text"
                    s={12}
                    m={2}
                >
                    Chat
                </Col>
            </Row>
        </Container>
    );
}

export default NewsFeed;
