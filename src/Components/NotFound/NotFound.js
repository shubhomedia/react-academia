import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row className='text-white bg-success bg-gradient'>
                    <Col >
                        <h2>
                            404 Not Found
                        </h2>
                        <h3>The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot.

                            A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent. If a resource is permanently removed, use the 410 (Gone) status instead.</h3>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default NotFound;