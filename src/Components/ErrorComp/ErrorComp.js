import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const ErrorComp = ({ error }) => {
    console.log(error);
    return (
        <>
            <div className="min-vh-100 " style={{ backgroundColor: "#181c1f" }}>
                <Container className="mt-5 bg-dark text-danger text-center p-5 rounded shadow ">
                    {error &&
                        <>
                            <h1 className=" fw-bold text-danger display-2 mb-5">Error</h1>
                            <p className="lead">Oop there something went wrong : {error.message}</p>
                            <Link to="/about" className="btn btn-danger">Back</Link>
                        </>
                    }
                </Container>
            </div>
        </>
    )
}

export default ErrorComp