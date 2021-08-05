import React from 'react'
import Hero from '../hero/Hero'


function About(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"I love"} heroTextSpan={"<br>"} heroTextSecond="journeys"></Hero>


        </>
    )
}

export default About
