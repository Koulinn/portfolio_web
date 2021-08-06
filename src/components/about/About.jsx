import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import Stack from './Stack'


function About(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"I'm quite a curious"} heroTextSpan={"<br>"} heroTextSecond="person"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection YIni={120} YEnd={570} order="0" spanText="<br>"></CommonSection>
                    <CommonSection order={props.isTabletOrMobile ? "0" : "2"} YIni={500} YEnd={1100} spanText="<br>"></CommonSection>
                    <Stack spanText="<br>"></Stack>

                </Container>
            </Container>

        </>
    )
}

export default About
