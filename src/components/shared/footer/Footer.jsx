import React from 'react'
import { Row } from 'react-bootstrap'

function Footer() {
    return (
        <div id="footer" className="container px-0">
            <Row>
                <div className="col"></div>
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
