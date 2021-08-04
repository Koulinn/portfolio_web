import React from 'react'
import { Row } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg'
import ContactText from '../Contact/ContactText'
import { ReactComponent as LinLogo } from '../../../assets/Icons/linkedin.svg'
import { ReactComponent as GitLogo } from '../../../assets/Icons/GitHub-logo 1.svg'
import { ReactComponent as IxDFLogo } from '../../../assets/Icons/IxDF.svg'
import { ReactComponent as ThinkOut } from '../../../assets/Imgs/thinkOutside.svg'


function Footer() {
    return (
        <div id="footer" className="container">
            <Row>
                <div className="col-4">
                    <div className="d-flex flex-column align-content-center justify-content-center logo-footer">
                        <Logo></Logo>
                    </div>
                    <ContactText footer={true}></ContactText>

                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <nav>
                        <ul className="pl-0">
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Resume</li>
                            <li>Contact</li>
                        </ul>
                    </nav>

                    <div className="socialMedia d-flex justify-content-between">
                        <div><LinLogo/></div>
                        <div><GitLogo/></div>
                        <div><IxDFLogo/></div>
                    </div>

                </div>
                <div className="col d-flex justify-content-end">
                    <ThinkOut/>
                </div>
            </Row>



        </div>
    )
}

export default Footer
