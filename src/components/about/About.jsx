import React, { useEffect } from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import { Element, scroller } from 'react-scroll'

function About(props) {
    useEffect(() => {
        scroller.scrollTo('aboutSection', {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -150,
        })
    }, [])

    const items = [
        {
            title: `One day I will get better at it`,
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/WhatsApp_Image_2021-09-20_at_15.50.41_wjrspg.jpg',
        },
        {
            title: 'Exercises and beautiful landscapes to keep the mind healthy',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/WhatsApp_Image_2021-09-20_at_15.52.07_cm0szs.jpg',
        },
        {
            title: 'I love Phillip Pullman books, this guy really has the talent',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/HDM_cunz1u.jpg',
        },
        {
            title: 'Once I went to China for 3 weeks, just to practice kung-fu from a traditional school',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1632149831/Portfolio/WhatsApp_Image_2021-09-20_at_15.49.56_exfkb8.jpg',
        },
    ]
    return (
        <>
            <Hero
                isTabletOrMobile={props.isTabletOrMobile}
                isMobile={props.isMobile}
                heroTextFirst={'Curiosity'}
                heroTextSecond='drives me'
            ></Hero>
            <Container id='about' className='p-0 position-relative' fluid>
                <BGTop></BGTop>
                <Element name='aboutSection'>
                    <Container>
                        <CommonSection
                            title={`I'm passionate about interaction design and coding`}
                            text={
                                'I love to bring the user at the centre of the design thinking process and create seamless interaction'
                            }
                            order='0'
                            imgURL={
                                'https://res.cloudinary.com/koulin/image/upload/v1632149266/Portfolio/mika-baumeister-Y_LgXwQEx2c-unsplash_1_lbbyvo.jpg'
                            }
                            isCarousel={false}
                        ></CommonSection>
                        <CommonSection
                            order={props.isTabletOrMobile ? '0' : '2'}
                            title={`Discover the unknown`}
                            text={`I like to keep active, martial arts helps me to keep balance between nature and modern life`}
                            isCarousel={true}
                            carouselItems={items}
                        ></CommonSection>
                        {/* <Stack ></Stack> */}
                    </Container>
                </Element>
            </Container>
        </>
    )
}

export default About
