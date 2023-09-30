import React from "react";
import { Container, Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import './linkStyle.css';

const NavBar = () => {
    const [user, setUser] = useState("abdelaziz");
    return (
        <>
            <Navbar className="shadow bg-dark">
                <Container>
                    <Navbar.Brand className="text-white fst-italic fw-bold "><Link to="/" className="text-decoration-none text-white">My Problems</Link></Navbar.Brand>
                    <Nav className="">
                        <Nav.Item>
                            <NavLink to="/" className="text-decoration-none text-white">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/create" className="text-decoration-none text-white">Create</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/about" className="text-decoration-none text-white">About</NavLink>
                        </Nav.Item>
                    </Nav>

                </Container>
            </Navbar>
            {/*     <Nav className="align-items-center">
                        <Nav.Item>
                            <NavLink to="/" >Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/about" >About</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/quote">Quote</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/guess">GuessGame</NavLink>
                        </Nav.Item>
                        <Button variant="danger" className="mx-2"><Link to="/create" className="text-decoration-none text-white">Create</Link></Button>
                        <Button variant="danger" onClick={() => setUser(null)} className=""><Link replace to="/" className="text-decoration-none text-white">Logout</Link></Button>

                    </Nav>
                </Container>
            </Navbar> */}
        </>
    );
}

export default NavBar;