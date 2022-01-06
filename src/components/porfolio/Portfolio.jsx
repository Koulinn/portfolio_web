import React, { useEffect } from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import List from '../shared/List'
import { Element, scroller } from 'react-scroll'

function Portfolio(props) {
    useEffect(() => {
        scroller.scrollTo('portfolioSection', {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -150,
        })
    }, [])
    const items = [
        {
            title: 'OneHealth',
            link: 'https://www.figma.com/proto/uwJcyDqkCOLRCX7ptjLkQd/OneHealth?node-id=133%3A804&scaling=scale-down&starting-point-node-id=133%3A6502',
        },
        {
            title: 'Elevato',
            link: 'https://www.figma.com/proto/vzB6n96qg4ePZK0BEzZYw8/Board-geral?page-id=0%3A1&node-id=497%3A13528&viewport=431%2C48%2C0.04&scaling=scale-down&starting-point-node-id=497%3A13528&show-proto-sidebar=1',
        },
        {
            title: 'Claris',
            link: 'https://www.figma.com/proto/IxlFpW2edfQpur25OZhAG6/Competenza?page-id=0%3A1&node-id=353%3A239&viewport=241%2C48%2C1&scaling=min-zoom&starting-point-node-id=639%3A2117&show-proto-sidebar=1',
        },
    ]

    const carouselItems = [
        {
            link: 'https://linkedin-m6-front-end.vercel.app/#/',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1631557965/Portfolio/linkedin-statistics_ujx3ss.png',
            title: 'Clone Linkedin',
            info: 'Use username Rafux with password test1234 or create your own account! Do not send any sensitive/real data!',
        },
        {
            link: 'https://m4-spotify-react.vercel.app/',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1631558002/Portfolio/https_3A_2F_2Fd1e00ek4ebabms.cloudfront.net_2Fproduction_2F8cd98967-b3ee-43f2-8cd6-7c76741d283c_cdb4bw.jpg',
            title: 'Clone Spotify',
            info: 'Click on home to start',
        },
        {
            link: 'https://capstone-oh-front.vercel.app/',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1636897549/Portfolio/OneHealth_Slider_img_tezhg1.png',
            title: 'OneHealth',
            info: 'Capstone project for Strive School',
        },
    ]
    return (
        <>
            <Hero
                isTabletOrMobile={props.isTabletOrMobile}
                isMobile={props.isMobile}
                heroTextFirst={'Take a peek'}
                heroTextSecond='at projects I have done'
            ></Hero>
            <Container className='p-0 position-relative' fluid>
                <BGTop></BGTop>
                <Element name='portfolioSection'>
                    <Container>
                        <CommonSection
                            title={'FS-development projects'}
                            text={`I'm always creating something to keep improving and discover new technologies.`}
                            isCarousel={true}
                            carouselItems={carouselItems}
                            order='0'
                        />
                        <CommonSection
                            imgURL={
                                'https://res.cloudinary.com/koulin/image/upload/v1635060036/Portfolio/portfolio_img_iu6obo.jpg'
                            }
                            isCarousel={false}
                            title={'UX projects'}
                            text={
                                'I also love UX design, after all the real user is key to any successful idea'
                            }
                            order={props.isTabletOrMobile ? '0' : '2'}
                            linkUrl='https://drive.google.com/file/d/1FNc4KKIHjcGmSCyByAA6Dl1kSlQZZ4p1/view?usp=sharing'
                            linkText={`Download UX Portfolio`}
                            // subsection={<List items={items} />}
                        />
                    </Container>
                </Element>
            </Container>
        </>
    )
}

export default Portfolio
