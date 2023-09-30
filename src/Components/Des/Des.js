import React from "react";
import "./Des.css";
import { Container } from "react-bootstrap";

const Des = ({ des }) => {
    return (
        <>
            <Container className="mt-3 text-white">
                <p className="lead">{des}</p>
            </Container>
        </>
    );
}

export default Des;