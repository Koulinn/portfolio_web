import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../hero/Hero'
import BGBody from '../shared/BGBody'
import CommonSection from '../shared/CommonSection'
import CustomCarouselDot from '../shared/CustomCarouselDot'

function Home(props) {
    return (
        <main>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Hello, I’m Rafa!"} heroTextSpan={"<br>"} heroTextSecond="Welcome"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGBody className=""></BGBody>
                <Container>
                <CommonSection order="0"></CommonSection>
                <CommonSection order="2"></CommonSection>
                <CommonSection order="0"></CommonSection>

                </Container>
            </Container>


        </main>
    )
}

export default Home
