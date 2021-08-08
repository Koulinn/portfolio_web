import React from 'react'
import { withRouter } from "react-router"
import { NavLink } from 'react-router-dom'

function FooterNav() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          })
    }
    return (
        <nav>
            <ul className="pl-0 d-flex flex-column align-items-center">
                <NavLink to="/" exact activeClassName="active"><li className="" onClick={scrollToTop}>Home</li></NavLink>
                <NavLink to="/about" exact activeClassName="active" className="mt-3"><li className="" onClick={scrollToTop}>About</li></NavLink>
                <NavLink to="/portfolio" exact activeClassName="active" className="my-3" onClick={scrollToTop}><li>Portfolio</li></NavLink>
                <NavLink to="/resume" exact activeClassName="active" onClick={scrollToTop}><li>Resume</li></NavLink>
            </ul>
        </nav>
    )
}

export default withRouter(FooterNav)
