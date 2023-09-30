import React from "react";
import { Button, Col, Container, Nav, Row, Spinner } from "react-bootstrap";
import Topics from "../Topics/Topics";
import Level from "../Level/Level";
import Des from "../Des/Des";
import Example from "../Example/Example";
import Constrain from "../Constrain/Constrain";
import { useNavigate, useParams } from "react-router-dom";
import ErrorComp from "../ErrorComp/ErrorComp";

import Code from "../Code/Code";
import useFetch from "../useFetch/useFetch";

const ProblemComp = () => {
    const params = useParams();
    const id = params.id;
    const [data, isPending, error] = useFetch(`http://localhost:8000/Problems/${id}`);
    const history = useNavigate();


    const deleteItem = () => {
        fetch(`http://localhost:8000/Problems/${id}`, {
            method: "DELETE"
        }).then(() => {
            history('/');
        })
    }


    return (
        <>
            {
                error ? <ErrorComp error={error} /> : isPending ? <Container className="vh-100 mt-5 text-center text-white"> <Spinner /> </Container> :
                        <Container className="min-vh-100 mt-5 bg-dark text-white p-5 rounded shadow" key={data.id}>
                            <Row>
                                <Col className="col-md-6">
                                    <h1 className="display-6"><Nav.Link target="_blank" href={data.url}>{data.name}</Nav.Link></h1>
                                    <Level name={data.level}></Level>
                                    <p className="mt-2">
                                        <Topics name={data.topic}></Topics>
                                    </p>
                                    <Des des={data.des}></Des>
                                    {/* <Container className="mt-5">
                                        <Example name={"Example 1:"} input={"[2,7,11,15],9"} output={"[0,1]"} explanation={"Because nums[0] + nums[1] == 9, we return [0, 1]."}></Example>
                                            <Example name={"Example 1:"} input={"[2,7,11,15],9"} output={"[0,1]"} explanation={"Because nums[0] + nums[1] == 9, we return [0, 1]."}></Example>
                                        </Container>
                                        <Container className="mt-5">
                                            <h5 className="mb-3">Constrain</h5>
                                            <Constrain con={"2 <= nums.length <= 104"}></Constrain>
                                            <Constrain con={"2 <= nums.length <= 104"}></Constrain>
                                            <Constrain con={"2 <= nums.length <= 104"}></Constrain>
                                        </Container> */}
                                </Col>
                                <Col >
                                    {/* <CodeM language={"cpp"} ></CodeM> */}
                                    <Code code={data.code} lang={"cpp"}></Code>
                                </Col>
                            </Row>
                            <Container className="mt-5">
                                <Button variant="danger" onClick={deleteItem}>Delete</Button>
                            </Container>
                        </Container >   
            }


        </>
    );
}

export default ProblemComp;