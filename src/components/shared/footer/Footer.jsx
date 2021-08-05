import React from 'react'
import { Row } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg'
import ContactText from '../Contact/ContactText'
import { ReactComponent as ThinkOut } from '../../../assets/Imgs/thinkOutside.svg'
import FooterSocialMedia from './FooterSocialMedia'
import FooterNav from './FooterNav'



function Footer() {
    return (
        <div id="footer" className="container">
            <Row>
                <div className="col-12 col-md-5">
                    <div className="d-flex flex-column align-content-center justify-content-center logo-footer">
                        <Logo className="align-self-center align-self-md-auto"></Logo>
                    </div>
                    <ContactText footer={true}></ContactText>

                </div>
                <div className="col d-flex flex-column justify-content-between mt-5 mt-md-0">
                    <FooterNav />

                </div>
                <div className="d-none col d-md-flex justify-content-end thinkOut-footer">
                    <ThinkOut />
                </div>
            </Row>
            <Row>
                <FooterSocialMedia />
            </Row>



        </div>
    )
}

export default Footer
