import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'




function Portfolio(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Take a peek"} heroTextSpan={"<br>"} heroTextSecond="from what I have done"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection YIni={120} YEnd={570} order="0" spanText="<br>"></CommonSection>
                    <CommonSection order={props.isTabletOrMobile ? "0" : "2"} YIni={500} YEnd={1100} spanText="<br>"></CommonSection>


                </Container>
            </Container>

        </>
    )
}

export default Portfolio
