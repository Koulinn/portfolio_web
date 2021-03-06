import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { ReactComponent as WhiteLogo } from "../../assets/logo/whiteLogo.svg";

import { MdMenu } from "react-icons/md";
import { useScrollYPosition } from "react-use-scroll-position";
import { withRouter } from "react-router";

import NavMenuMobile from "./NavMenuMobile";
import NavMenuDesktop from "./NavMenuDesktop";

function NavBar({ isMobile, isTabletOrMobile, location, history }) {
  const scrollY = useScrollYPosition();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      variant="light"
      className={isTabletOrMobile ? "BG-NavBarColor p-0" : "p-0"}
    >
      <Container fluid className="position-relative px-0 py-2">
        <div
          id="BG-NavBar"
          className={scrollY > 60 ? "BG-NavBarColor" : ""}
        ></div>
        <Container className="p-0">
          <div
            className={isTabletOrMobile ? "d-flex align-items-baseline" : ""}
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className={isMobile ? "border-0 pl-3" : "border-0"}
            >
              {" "}
              <MdMenu className="font-Icon"></MdMenu>
            </Navbar.Toggle>
            <Navbar.Brand
              to="/"
              className="pl-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/")();
              }}
            >
              <div
                id="logo-NavBar"
                className="d-none d-md-flex flex-column justify-content-center align-items-center"
              >
                {scrollY > 60 ? <WhiteLogo /> : <Logo />}

                <span
                  className={
                    scrollY > 60
                      ? "transitionFadeOut m-0"
                      : "transitionFadeIn mt-2"
                  }
                >
                  Full-stack REACT Developer
                </span>
              </div>
              <div className="d-flex py-0 d-md-none">
                <span className="Nav-font-menu pt-1">Rafa</span>
              </div>
            </Navbar.Brand>
            <div className="d-flex py-0 d-md-none">
              <span className="pt-1">
                {location.pathname === "/"
                  ? "/Home"
                  : "/" +
                    location.pathname[1].toUpperCase() +
                    location.pathname.slice(2)}
              </span>
            </div>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav" className="mt-3 my-md-0">
            <Nav
              className={
                isTabletOrMobile || scrollY > 60
                  ? "text-center align-items-center mx-auto"
                  : "mx-auto fontDark"
              }
            >
              {isTabletOrMobile ? <NavMenuMobile /> : <NavMenuDesktop />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default withRouter(NavBar);
