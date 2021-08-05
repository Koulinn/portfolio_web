import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../hero/Hero'
import CommonSection from '../shared/CommonSection'
import BGTop from '../shared/BGTop'


function Home(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Hello! I’m Rafa"} heroTextSpan={"<br>"} heroTextSecond="Welcome"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                <CommonSection order="0" spanText="<br>"></CommonSection>
                <CommonSection order={props.isTabletOrMobile? "0" : "2"} spanText="<br>"></CommonSection>

                </Container>
            </Container>


        </>
    )
}

export default Home
