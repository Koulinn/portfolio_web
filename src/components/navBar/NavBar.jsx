import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { ReactComponent as Logo }  from '../../assets/logo/Logo.svg'
import { MdShare } from "react-icons/md";

function topNavBar() {
    return (
        <Navbar expand="md" bg="light" fixed="top" variant="light">
            <Container>
                <div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home" className="pl-3">
                        <div className="d-none d-md-flex flex-column justify-content-center align-items-center">
                            <Logo></Logo>
                            <span>Front-End/UX Designer</span>
    
                        </div>
                        <div className="d-flex d-md-none">
                            <span>Rafa</span>
    
                        </div>
                    
                    </Navbar.Brand>
                </div>
               <MdShare className="d-md-none"></MdShare>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default topNavBar
