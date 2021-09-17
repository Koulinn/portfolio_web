import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ContactText from './ContactText'
import BGTop from '../BGTop'


function Contact(props) {
    const UnitedImg = 'https://res.cloudinary.com/koulin/image/upload/v1631899930/Portfolio/contact_us_ugwbg3.jpg'
    return (
        <Container id="contact-section" className="px-0 position-relative" fluid>
            <BGTop invert={true}></BGTop>
            <Container>
                <Row>
                    <div className="col-12 col-md-6">
                        <ContactText spanText={props.spanText} />
                    </div>

                    <div className=" d-none col-md-6 d-md-flex justify-content-md-end">
                        <img className="ImgShadowEffect" src={UnitedImg} alt="" />
                    </div>
                </Row>

            </Container>
        </Container>
    )
}

export default Contact
