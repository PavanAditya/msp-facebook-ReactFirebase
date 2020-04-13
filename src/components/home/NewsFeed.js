import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import '../css/NewsFeed.css';

class NewsFeed extends Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col
                        className="teal white-text"
                        s={12}
                        m={3}
                    >
                        Profile
                    </Col>
                    <Col
                        className="orange white-text"
                        s={12}
                        m={7}
                    >
                        Feed
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
}

export default NewsFeed;
