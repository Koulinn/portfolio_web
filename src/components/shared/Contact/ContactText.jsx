import React from 'react'
import { ReactComponent as Telegram } from '../../../assets/Icons/telegram.svg'
import { ReactComponent as Whatssap } from '../../../assets/Icons/whatssap.svg'
import { AiOutlineMail } from 'react-icons/ai';

function ContactText(props) {
    return (
        <div id="contact-section-text" className="d-flex flex-column">
                            <h2>Contact <span className="spanText">{props.spanText}</span></h2>
                            <div className="d-flex align-items-center mb-3">
                                <p>+44 07985199302</p>
                                <div className="d-flex icons-WT">
                                    <div className="ml-3 cursorPointer">
                                       <Whatssap/>
                                    </div>
                                    <div className="ml-3 cursorPointer telegram-icon">
                                       <Telegram/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <p>drdverzola@gmail.com</p>
                                <div className="ml-3 cursorPointer">
                                    <AiOutlineMail/>
                                </div>
                                
                            </div>
                            <p>Or drop me a message</p>
                        </div>
    )
}

export default ContactText
