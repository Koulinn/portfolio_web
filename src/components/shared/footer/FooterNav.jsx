import React from 'react'
import { withRouter } from "react-router"
import { NavLink } from 'react-router-dom'

function FooterNav() {
    return (
        <nav>
            <ul className="pl-0 d-flex flex-column align-items-center">
                <NavLink to="/" exact activeClassName="active"><li className="">Home</li></NavLink>
                <NavLink to="/about" exact activeClassName="active" className="mt-3"><li className="">About</li></NavLink>
                <NavLink to="/portfolio" exact activeClassName="active" className="my-3"><li>Portfolio</li></NavLink>
                <NavLink to="/resume" exact activeClassName="active" ><li>Resume</li></NavLink>
            </ul>
        </nav>
    )
}

export default withRouter(FooterNav)
