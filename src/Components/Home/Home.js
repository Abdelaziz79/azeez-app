import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch/useFetch";
import { Container, Spinner } from "react-bootstrap";
import ErrorComp from "../ErrorComp/ErrorComp";
import MiniCard from "../MiniCard/MiniCard";

const Root = () => {
    const [data, isPending, error] = useFetch("http://localhost:8000/Problems");


    return (
        <>
            <Container className=" ">
                {error ? <ErrorComp error={error} /> : isPending && <Container className="vh-100 mt-5 text-center text-white"> <Spinner /> </Container>}
                {data && data.map((item) => {
                    return (
                        <MiniCard p={item} />
                    )
                })}
            </Container>
        </>
    );
}

export default Root;