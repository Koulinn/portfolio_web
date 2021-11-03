import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import TimeLine from './timeLine/TimeLine'



function Resume(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"I already did"} heroTextSpan={"<br>"} heroTextSecond="many things"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection
                        imgURL={'https://res.cloudinary.com/koulin/image/upload/v1632161631/Portfolio/joao-ferrao-4YzrcDNcRVg-unsplash_1_pb4gcd.jpg'}
                        isCarousel={false}
                        title={'Check out my CV'}
                        text={'A well rounded Web UX desinerloper with great leadership skills, creativity and always ready to play in any team! '}
                        order="0"
                        spanText="<br>"
                        linkUrl='https://drive.google.com/file/d/1Mn5pOEyFAHgTeWe6bUrygdSRyGq7iei7/view?usp=sharing'
                        linkText={`Download Rafa Lima CV`}
                        download={true}

                    ></CommonSection>
                    <TimeLine />
                </Container>
            </Container>

        </>
    )
}

export default Resume
