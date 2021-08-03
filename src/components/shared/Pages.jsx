import React from 'react'
import About from '../about/About'
import Home from '../home/Home'
import Portfolio from '../porfolio/Portfolio'
import Resume from '../resume/Resume'
import { Container } from 'react-bootstrap'
import BGBody from './BGBody'


function Pages(props) {
    return (
        <>
           
            <Home isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile}></Home>
            <About isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile}></About>
            <Portfolio isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile}></Portfolio>
            <Resume isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile}></Resume>

        </>
    )
}

export default Pages
