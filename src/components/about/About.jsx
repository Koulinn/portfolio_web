import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import Stack from './Stack'


function About(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"I'm quite..."} heroTextSpan={"<br>"} heroTextSecond="curious"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection order="0" spanText="<br>"></CommonSection>
                    <CommonSection order={props.isTabletOrMobile ? "0" : "2"} spanText="<br>"></CommonSection>
                    <Stack spanText="<br>"></Stack>

                </Container>
            </Container>

        </>
    )
}

export default About
