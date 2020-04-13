import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import '../css/LoadPostCard.css'

const LoadPostCard = (post) => {
    return (
        <div style={{ marginTop: 25 }} className="singlePostBox">
            <div className="outerBox m10">
                <div className="load-box">
                    <Container>
                        <Row>
                            <Col className="load-col" s={1} m={1}>
                                <div className="loading card-image"></div>
                            </Col>
                            <Col className="load-col" s={11} m={11}>
                                <div className="loading card-title"></div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="loading card-desc">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadPostCard;
