import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../hero/Hero'
import CommonSection from '../shared/CommonSection'
import BGTop from '../shared/BGTop'



function Home(props) {
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Hello! I’m Rafa"} heroTextSpan={"<br>"} heroTextSecond="Welcome!"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>

                    <CommonSection
                        title={'A well rounded professional with UX and Web development skills'}
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
                        title={`Always in continuing education`}
                        text={'To keep pace with new technologies to deliver the best results'}
                        order={props.isTabletOrMobile ? "0" : "2"} 
                        spanText="<br>"
                        imgURL={'https://res.cloudinary.com/koulin/image/upload/v1632161631/Portfolio/joao-ferrao-4YzrcDNcRVg-unsplash_1_pb4gcd.jpg'}
                        isCarousel={false}
                        internalUrl='/resume'
                        linkText={`Go to resume`}
                        
                        >

                    </CommonSection>
                </Container>
            </Container>


        </>
    )
}

export default Home
