import React from 'react'
import { NavLink } from 'react-router-dom'

function NavMenuDesktop() {
    return (
        <>
            <NavLink to='/' exact activeClassName='active'>
                Home
            </NavLink>
            <NavLink
                to='/about'
                exact
                activeClassName='active'
                className='mx-0 mx-md-3 my-3 my-md-0'
            >
                About
            </NavLink>
            <NavLink to='/portfolio' exact activeClassName='active'>
                Portfolio
            </NavLink>
            <NavLink
                to='/resume'
                exact
                activeClassName='active'
                className='mx-0 mx-md-3 my-3 my-md-0'
            >
                Resume
            </NavLink>
        </>
    )
}

export default NavMenuDesktop
