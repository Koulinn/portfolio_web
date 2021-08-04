import React from 'react'
import { Row } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg'
import ContactText from '../Contact/ContactText'


function Footer() {
    return (
        <div id="footer" className="container">
            <Row>
                <div className="col-5">
                    <div className="d-flex flex-column align-content-center justify-content-center logo-footer">
                    
                            
                               
                                    
                                        <Logo></Logo>
                                        <span>Front-End/UX Designer</span>
                                    
                                    
                               
                        
                    </div>
                    <ContactText footer={true}></ContactText>

                </div>
                <div className="col">
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Resume</li>
                            <li>Contact</li>
                        </ul>
                    </nav>

                </div>
                <div className="col"></div>
            </Row>


            
        </div>
    )
}

export default Footer
