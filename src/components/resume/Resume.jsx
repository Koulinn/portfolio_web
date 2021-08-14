import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import TimeLine from './timeLine/TimeLine'



function Resume(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"I already have been"} heroTextSpan={"<br>"} heroTextSecond="to many places"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection order="0" spanText="<br>"></CommonSection>
                    <TimeLine/>
                    <CommonSection order={props.isTabletOrMobile ? "0" : "2"} spanText="<br>"></CommonSection>


                </Container>
            </Container>

        </>
    )
}

export default Resume
