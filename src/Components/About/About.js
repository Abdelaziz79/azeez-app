import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import img1 from "../../Assets/Images/p.png";

const About = () => {
    return (
        <>
            <Card className="shadow mt-5 bg-dark text-white" >
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Card.Img src={img1} />
                            </Col>
                            <Col>
                                <Card.Title className="text-start">
                                    <h1 className="display-1 text-white">About Us</h1>
                                    <p>This is a website that helps you to solve problems related to computer science and mathematics </p>
                                </Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
}

export default About;