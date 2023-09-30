import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const PageNotFound = () => {
    return (
        <>
            <div className="min-vh-100 " style={{ backgroundColor: "#181c1f" }}>
                <Container className="mt-5 bg-dark text-danger text-center p-5 rounded shadow ">
                    <h1 className=" fw-bold text-danger display-2 mb-5">404</h1>
                    <p className="lead">Oop this page is not found</p>
                    <Link to="/about" className="btn btn-danger">Back</Link>
                </Container>
            </div>
        </>
    )
}

export default PageNotFound;