import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../assets/logo/Logo.svg'
import { ReactComponent as WhiteLogo } from '../../assets/logo/whiteLogo.svg'
import { MdShare, MdMenu } from "react-icons/md";
import { useScrollYPosition } from 'react-use-scroll-position';
import { withRouter } from "react-router"
import { NavLink } from 'react-router-dom'




function NavBar({isMobile, isTabletOrMobile}) {
    const scrollY = useScrollYPosition();



    return (

        <Navbar expand="md" fixed="top" variant="light" className={isTabletOrMobile ? 'BG-NavBarColor p-0' : "p-0"}>
            <Container fluid className="position-relative px-0 py-2">
                <div id="BG-NavBar" className={scrollY > 60 ? "BG-NavBarColor" : ''}></div>
                <Container className="p-0">
                    <div className={isTabletOrMobile ? 'd-flex align-items-baseline' : ''}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={isMobile ? 'border-0 pl-3' : "border-0"}> <MdMenu className="font-Icon"></MdMenu></Navbar.Toggle>
                        <Navbar.Brand href="#home" className="pl-3">
                            <div id="logo-NavBar" className="d-none d-md-flex flex-column justify-content-center align-items-center">
                                 {scrollY > 60 ? <WhiteLogo/> : <Logo/>}

                                <span className={scrollY > 60 ? 'transitionFadeOut m-0' : 'transitionFadeIn mt-2'}>Front-End/UX Designer
                                </span>

                            </div>
                            <div className="d-flex py-0 d-md-none">
                                <span className="Nav-font-menu pt-1">Rafa</span>

                            </div>


                        </Navbar.Brand>
                        <div className="d-flex py-0 d-md-none">
                            <span className="pt-1">Home</span>

                        </div>
                    </div>
                    <div className={
                        isMobile ? 'mr-3 shareBtn cursorPointer' :
                            isTabletOrMobile ? 'shareBtn cursorPointer' :
                                'd-md-none'
                    }
                    >
                        <MdShare className="font-Icon"></MdShare>

                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={isTabletOrMobile || (scrollY > 60) ? 'pl-3 text-center mx-auto' : "mx-auto fontDark"}>
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

export default withRouter(NavBar)
