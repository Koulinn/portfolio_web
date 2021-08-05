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
                <div className="col-12 col-md-5">
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

                </div>
                <div className="d-none col d-md-flex justify-content-end thinkOut-footer">
                    <ThinkOut />
                </div>
            </Row>
            <Row>
                <div className="col mt-5 socialMedia justify-content-end d-flex">
                    <div><LinLogo className="cursorPointer" /></div>
                    <div className="mx-4 "><GitLogo className="cursorPointer" /></div>
                    <div><IxDFLogo className="cursorPointer" /></div>
                </div>

            </Row>



        </div>
    )
}

export default Footer
