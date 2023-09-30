import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Create = () => {

    // const problemsUrl = 'https://codeforces.com/api/problemset.problems';
    const p_url = "http://localhost:8000/Problems";

    const history = useNavigate();

    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [level, setLevel] = useState('');
    const [url, setUrl] = useState('');
    const [des, setDes] = useState('');
    const [topic, setTopic] = useState('');
    function createProblem(e) {
        e.preventDefault();
        const item = { name, url, level, code, des, topic };

        console.log(item);

        const res = fetch(p_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        }).then(() => {
            console.log("done");
            history('/');
            
        })
    }

    

    return (
        <>
            <Container className='mt-5 bg-dark text-white p-5 rounded shadow'>
                <h1 className='display-6 mb-5'>Problem</h1>
                <Container>
                    <form>
                        <Row className='mt-2'>
                            <Col className='col-2'>
                                <label for="p-name" className='form-label'>Problem name</label>
                            </Col>
                            <Col>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control bg-dark text-white' id='p-name' />
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col className='col-2'>
                                <label for="p-url" className='form-label'>Problem url</label>
                            </Col>
                            <Col>
                                <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} className='form-control bg-dark text-white' id='p-name' />
                            </Col>
                        </Row>
                        <Row className='mt-2 ' >

                            <Col className='col-2'>
                                <label for="p-level" className='form-label'>level</label>
                            </Col>
                            <Col className='col-2'>
                                <select className='form-select bg-dark text-white' id='p-level' onChange={(e) => setLevel(e.target.value)} value={level}>
                                    <option  selected value=""></option>
                                    <option  value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </Col>

                            <Col>
                                <Row>
                                    <Col className='col-2'>
                                        <label for="p-topic" className='form-label'>Topics</label>
                                    </Col>
                                    <Col >
                                        <input type="text" className='form-control bg-dark text-white' id='p-topic' onChange={(e) => setTopic(e.target.value)} value={topic} placeholder='Topics' />
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row className='mt-2'>
                            <Col className='col-2'>
                                <label for="p-des" className='form-label'>Problem Description</label>
                            </Col>
                            <Col>
                                <textarea className='form-control bg-dark text-white' onChange={(e) => setDes(e.target.value)} value={des} rows="5" id='p-des' />
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col className='col-2'>
                                <label for="p-code" className='form-label'>Problem Code</label>
                            </Col>
                            <Col>
                                <textarea className='form-control bg-dark text-white' onChange={(e) => setCode(e.target.value)} value={code} rows="5" id='p-code' />
                            </Col>
                        </Row>
                        <Button className='btn btn-primary mt-3' type="submit" onClick={(e) => createProblem(e)}>Create</Button>
                    </form>
                </Container>
            </Container>
        </>
    );
};

export default Create;
