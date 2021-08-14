import React from 'react'
import { NavLink } from 'react-router-dom'


function NavMenuDesktop({scrollToTop}) {
    return (
        <>
            <NavLink to="/" exact activeClassName="active" onClick={scrollToTop}>Home</NavLink>
            <NavLink to="/about" exact activeClassName="active" className="mx-0 mx-md-3 my-3 my-md-0" onClick={scrollToTop}>About</NavLink>
            <NavLink to="/portfolio" exact activeClassName="active" onClick={scrollToTop}>Portfolio</NavLink>
            <NavLink to="/resume" exact activeClassName="active" className="mx-0 mx-md-3 my-3 my-md-0" onClick={scrollToTop}>Resume</NavLink>
        </>
    )
}

export default NavMenuDesktop
