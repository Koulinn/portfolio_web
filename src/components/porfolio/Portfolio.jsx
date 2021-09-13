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
            link: 'https://www.figma.com/proto/IxlFpW2edfQpur25OZhAG6/Competenza?page-id=0%3A1&node-id=506%3A413&viewport=431%2C48%2C0.03&scaling=min-zoom&starting-point-node-id=506%3A413&show-proto-sidebar=1'
        },
        {
            title: 'Claris',
            link: 'https://www.figma.com/proto/IxlFpW2edfQpur25OZhAG6/Competenza?node-id=0%3A1&viewport=431%2C48%2C0.83&scaling=min-zoom&starting-point-node-id=506%3A413&show-proto-sidebar=1'
        }
    ]
    return (
        <>
            <Hero isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} heroTextFirst={"Take a peek"} heroTextSpan={"<br>"} heroTextSecond="from what I have done"></Hero>
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
                    <CommonSection order={props.isTabletOrMobile ? "0" : "2"} spanText="<br>"></CommonSection>


                </Container>
            </Container>

        </>
    )
}

export default Portfolio
