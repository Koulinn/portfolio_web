import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function NavMenuMobile() {
    return (
        <>
            <Navbar.Toggle>
                <NavLink to='/' exact activeClassName='active'>
                    Home
                </NavLink>
            </Navbar.Toggle>
            <Navbar.Toggle className='my-3 my-md-0'>
                <NavLink
                    to='/about'
                    exact
                    activeClassName='active'
                    className='mx-0 mx-md-3 my-3 my-md-0'
                >
                    About
                </NavLink>
            </Navbar.Toggle>
            <Navbar.Toggle>
                <NavLink to='/portfolio' exact activeClassName='active'>
                    Portfolio
                </NavLink>
            </Navbar.Toggle>
            <Navbar.Toggle className='my-3 my-md-0'>
                {' '}
                <NavLink
                    to='/resume'
                    exact
                    activeClassName='active'
                    className='mx-0 mx-md-3 my-3 my-md-0'
                >
                    Resume
                </NavLink>
            </Navbar.Toggle>
        </>
    )
}

export default NavMenuMobile
