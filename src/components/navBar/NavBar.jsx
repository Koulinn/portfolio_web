import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { ReactComponent as Logo }  from '../../assets/logo/Logo.svg'
import { MdShare, MdMenu } from "react-icons/md";
import { useScrollYPosition } from 'react-use-scroll-position';


function NavBar() {
    const scrollY = useScrollYPosition();



    return (
        <Navbar expand="md" fixed="top" variant="light" className="p-0">
            <Container fluid className="position-relative px-0 py-2">
            <div id="BG-NavBar" className={scrollY > 60 ? "BG-NavBarColor" : ''}></div>
                <Container className="p-0">
                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0"> <MdMenu></MdMenu></Navbar.Toggle>
                        <Navbar.Brand href="#home" className="pl-3">
                            <div className="d-none d-md-flex flex-column justify-content-center align-items-center">
                                <Logo></Logo>
                                
                                <span className={scrollY > 60 ?  'transitionFadeOut' : 'transitionFadeIn'}>Front-End/UX Designer
                                </span>
        
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
            </Container>
        </Navbar>
    )
}

export default NavBar
