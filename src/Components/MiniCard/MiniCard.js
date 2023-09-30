import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Level from "../Level/Level";
import Topics from "../Topics/Topics";
import { Link, useNavigate } from "react-router-dom";


const MiniCard = ({ p }) => {
    const history = useNavigate();

    const [up, setUp] = useState(p.up ? Number(p.up) : 0);
    const [down, setDown] = useState(p.down ? Number(p.down) : 0);
    let [pin, setPin] = useState(p.pin ? true : false);

    const update = (e, up, down) => {
        e.preventDefault();
        fetch(`http://localhost:8000/Problems/${p.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ up, down })
        }).then(() => {
            console.log("done");
            history('/');
        })
    }

    const setPinKey = (e) => {
        pin = !pin;
        setPin(pin);
        console.log(pin);
        fetch(`http://localhost:8000/Problems/${p.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pin })
        }).then(() => {
            console.log("done");

        })
    }

    return (
        <>
            <Container className="mt-5 bg-dark text-white p-5 rounded shadow" key={p.id}>
                <Link to={`/problem/${p.id}`} className="text-decoration-none text-white"><h3>{p.name}</h3></Link>
                <Level name={p.level}></Level><br />
                <Row>
                    <Col>
                        <div className="mt-2">
                            <Topics name={p.topic}></Topics>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-end ">
                            {pin ? <Button onClick={(e) => { setPinKey(e) }} style={{ border: "none" }} className="m-1 bg-danger ">Unpin <i class="bi bi-pin-angle-fill"></i></Button> : <Button onClick={(e) => { setPinKey(e) }} className="m-1 bg-dark">Pin <i class="bi bi-pin-angle"></i></Button>}
                            {/* <Button onClick={(e) => { setPinKey(e) }} className="m-1 bg-dark" >{pin ? "Unpin" : "Pin"} </Button> */}
                            {/* <Button onClick={(e) => { setUp(up + 1); update(e, up + 1, down) }} className="m-1 bg-dark">Up : {up}</Button> */}
                            {/* <Button onClick={(e) => { setDown(down - 1); update(e, up, down - 1) }} className="m-1 bg-dark">Down : {down}</Button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MiniCard;
