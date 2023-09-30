import React from "react";
import './Example.css';
import { Container } from "react-bootstrap";

const Example = ({ name, input, output, explanation }) => {
    return (
        <>
            <Container className="mt-3">
                <h5>{name}</h5>
                <Container>
                    <p className="m-1"><b>Input : </b>{input}</p>
                    <p className="m-1"><b>Output : </b>{output}</p>
                    <p className="m-1"><b>Explanation : </b>{explanation}</p>
                </Container>
            </Container>
        </>
    );
}

export default Example;