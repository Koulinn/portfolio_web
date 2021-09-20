import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../hero/Hero'
import CommonSection from '../shared/CommonSection'
import BGTop from '../shared/BGTop'
import { Link } from 'react-router-dom'


function Home(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Hello! I’m Rafa"} heroTextSpan={"<br>"} heroTextSecond="Welcome!"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>

                    <CommonSection
                        title={'A well rounded professional with UX and Full-stack development skills'}
                        text={`Check out my UX and Web development projects`}
                        order="0"
                        spanText="<br>"
                        imgURL={'https://res.cloudinary.com/koulin/image/upload/v1632159321/Portfolio/bigstock-Lego-Workers_1_y3wssk.jpg'}
                        isCarousel={false}
                        internalUrl='/portfolio'
                        linkText={`Go to portfolio`}
                    >
                    </CommonSection>



                    <CommonSection
                        title={'Home is still under development'}
                        text={'this page is under development'}
                        order={props.isTabletOrMobile ? "0" : "2"} spanText="<br>">

                    </CommonSection>
                </Container>
            </Container>


        </>
    )
}

export default Home
