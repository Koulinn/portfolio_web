import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import Stack from './Stack'


function About(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Curiosity"} heroTextSpan={"<br>"} heroTextSecond="drives me"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection
                        title={`I'm always learning something new`}
                        text={'I love changing environments where we need to be always researching and adapting to achieve the best results and deliver an outstanding project'}
                        order="0"
                        spanText="<br>">

                    </CommonSection>
                    <CommonSection
                        order={props.isTabletOrMobile ? "0" : "2"}
                        spanText="<br>"
                        title={`Discover the unknown`}
                        text={`I'm always changing my habits but I found martial arts a place to keep balance between modern life and nature`}


                    >

                    </CommonSection>
                    <Stack spanText="<br>"></Stack>

                </Container>
            </Container>

        </>
    )
}

export default About
