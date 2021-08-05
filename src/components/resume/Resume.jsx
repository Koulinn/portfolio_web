import React from 'react'
import Hero from '../hero/Hero'


function Resume(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Hello, Welcome!"} heroTextSpan={"<br>"} heroTextSecond="This is Rafa"></Hero>


        </>
    )
}

export default Resume
