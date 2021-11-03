import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'



function About(props) {
    const items = [
        {
            title: `Hope one day I can get better at it`,
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/WhatsApp_Image_2021-09-20_at_15.50.41_wjrspg.jpg'
        },
        {
            title: 'Martial arts helps me to keep balance',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/WhatsApp_Image_2021-09-20_at_15.52.07_cm0szs.jpg'
        },
        {
            title: 'I love Phillip Pullman books, this guy really has the talent',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/HDM_cunz1u.jpg'
        },
        {
            title: 'I went into a kung-fu school in China for 3 weeks, this was the craziest experience I ever had',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/WhatsApp_Image_2021-09-20_at_15.49.56_exfkb8.jpg'
        }
    ]
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Curiosity"} heroTextSpan={"<br>"} heroTextSecond="drives me"></Hero>
            <Container id='about' className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection
                        title={`I'm always learning something new`}
                        text={'I love challenging environments where we need to go beyond to achieve great results and deliver an outstanding product'}
                        order="0"
                        spanText="<br>"
                        imgURL={'https://res.cloudinary.com/koulin/image/upload/v1632149266/Portfolio/mika-baumeister-Y_LgXwQEx2c-unsplash_1_lbbyvo.jpg'}
                        isCarousel={false}
                        >

                    </CommonSection>
                    <CommonSection
                        order={props.isTabletOrMobile ? "0" : "2"}
                        spanText="<br>"
                        title={`Discover the unknown`}
                        text={`I like to keep active, martial arts helps me to keep balance between nature and modern life`}
                        isCarousel={true}
                        carouselItems={items}

                    >

                    </CommonSection>
                    {/* <Stack spanText="<br>"></Stack> */}

                </Container>
            </Container>

        </>
    )
}

export default About
