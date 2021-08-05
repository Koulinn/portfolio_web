import React from 'react'
import Hero from '../hero/Hero'


function About(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"I'm quite a curious"} heroTextSpan={"<br>"} heroTextSecond="person"></Hero>


        </>
    )
}

export default About
