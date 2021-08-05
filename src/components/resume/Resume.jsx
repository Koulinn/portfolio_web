import React from 'react'
import Hero from '../hero/Hero'


function Resume(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"My professional journey"} heroTextSpan={"<br>"} heroTextSecond="took me to lots of places"></Hero>


        </>
    )
}

export default Resume
