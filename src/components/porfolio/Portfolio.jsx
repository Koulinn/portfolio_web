import React from 'react'
import Hero from '../hero/Hero'


function Portfolio(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Take a peek"} heroTextSpan={"<br>"} heroTextSecond="from what I have done"></Hero>


        </>
    )
}

export default Portfolio
