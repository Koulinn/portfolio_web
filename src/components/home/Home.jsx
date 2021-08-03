import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../hero/Hero'
import BGBody from '../shared/BGBody'

function Home(props) {
    return (
        <main>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Hello, I’m Rafa!"} heroTextSpan={"<br>"} heroTextSecond="Welcome"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGBody className=""></BGBody>
            </Container>


        </main>
    )
}

export default Home
