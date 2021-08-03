import React from 'react'
import { Container, Row } from 'react-bootstrap'
import UnitedImg from '../../../assets/Imgs/united.png'
import BGBody from '../BGBody'
import ContactText from './ContactText'


function Contact(props) {
    return (
        <Container id="contact-section" className="p-0 position-relative" fluid>
            <BGBody></BGBody>
            <Container>
                <Row>
                    <div className="col-12 col-md-6">
                        <ContactText spanText={props.spanText}></ContactText>
                    </div>
    
                    <div className=" d-none col-12 col-md-6 d-md-flex justify-content-md-end">
                        <img className="ImgShadowEffect" src={UnitedImg} alt="" />
                    </div>
                </Row>
                
            </Container>
        </Container>
    )
}

export default Contact
