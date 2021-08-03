import React from 'react'
import { Container, Row } from 'react-bootstrap'
import UnitedImg from '../../../assets/Imgs/united.png'
import BGBody from '../BGBody'

function Contact() {
    return (
        <Container id="contact-section" className="p-0 position-relative" fluid>
            <BGBody></BGBody>
            <Container>
                <Row>
                    <div className="col-12 col-md-6">
    
                    </div>
    
                    <div className="col-12 col-md-6">
                        <img className="ImgShadowEffect" src={UnitedImg} alt="" />
                    </div>
                </Row>
                
            </Container>
        </Container>
    )
}

export default Contact
