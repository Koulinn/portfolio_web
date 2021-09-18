import React from 'react'
import Hero from '../hero/Hero'
import { Container } from 'react-bootstrap'
import BGTop from '../shared/BGTop'
import CommonSection from '../shared/CommonSection'
import List from '../shared/List'




function Portfolio(props) {
    const items = [
        {
            title: 'OneHealth',
            link: 'https://www.figma.com/proto/uwJcyDqkCOLRCX7ptjLkQd/OneHealth?node-id=133%3A804&scaling=scale-down&starting-point-node-id=133%3A6502'
        },
        {
            title: 'Elevato',
            link: 'https://www.figma.com/proto/vzB6n96qg4ePZK0BEzZYw8/Board-geral?page-id=0%3A1&node-id=497%3A13528&viewport=431%2C48%2C0.04&scaling=scale-down&starting-point-node-id=497%3A13528&show-proto-sidebar=1'
        },
        {
            title: 'Claris',
            link: 'https://www.figma.com/proto/IxlFpW2edfQpur25OZhAG6/Competenza?node-id=0%3A1&viewport=431%2C48%2C0.83&scaling=min-zoom&starting-point-node-id=506%3A413&show-proto-sidebar=1'
        }
    ]

    const carouselItems = [
        {
            link: 'https://linkedin-m6-front-end.vercel.app/#/',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1631557965/Portfolio/linkedin-statistics_ujx3ss.png',
            title: 'Clone Linkedin',
            info: 'Use username Rafux with password test1234 or create your own account! Do not send any sensitive/real data!'
        },
        {
            link: 'https://koulinn.github.io/',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1631558002/Portfolio/https_3A_2F_2Fd1e00ek4ebabms.cloudfront.net_2Fproduction_2F8cd98967-b3ee-43f2-8cd6-7c76741d283c_cdb4bw.jpg',
            title: 'Clone Spotify',
            info: 'Click on home to start'
        },
        {
            link: '',
            image: 'https://res.cloudinary.com/koulin/image/upload/v1631558066/Portfolio/desarrollo-web-marketplace_hnzakj.jpg',
            title: 'Marketplace'
        },
    ]
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Take a peek"} heroTextSpan={"<br>"} heroTextSecond="of things I have done"></Hero>
            <Container className="p-0 position-relative" fluid>
                <BGTop></BGTop>
                <Container>
                    <CommonSection
                        imgURL={'https://res.cloudinary.com/koulin/image/upload/v1631551108/Portfolio/0e58fde1890c02624cc2e4bd378e72b07255c8ff-4240x2000_fq7aew.png'}
                        isCarousel={false}
                        title={'UX projects'}
                        text={'Take a look on this canvas with some projects that I participated'}
                        order="0"
                        spanText="<br>"
                        linkUrl='https://www.figma.com/file/o22eUJF3N1mkTbP2JNLhZt/Rafa-Lima->-Portfolio?node-id=0%3A1'
                        linkText={`Go to Rafa Lima's FigJam board`}
                        subsection={<List items={items} />}
                    >

                    </CommonSection>
                    <CommonSection
                        title={'Web development projects'}
                        text={'Check some projects that I did on the Strive school'}
                        order={props.isTabletOrMobile ? "0" : "2"}
                        spanText="<br>"
                        isCarousel={true}
                        carouselItems={carouselItems}
                    >


                    </CommonSection>


                </Container>
            </Container>

        </>
    )
}

export default Portfolio
