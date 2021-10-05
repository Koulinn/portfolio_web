import React from 'react'
import { ReactComponent as Telegram } from '../../../assets/Icons/telegram.svg'
import { ReactComponent as Whatssap } from '../../../assets/Icons/whatssap.svg'
import { AiOutlineMail } from 'react-icons/ai';

function ContactText(props) {
    return (
        <div id="contact-section-text" className="d-flex flex-column align-items-center align-items-md-start">
            <h2>Contact <span className="spanText">{props.spanText}</span></h2>
            <div className="d-flex align-items-center mb-3">
                <p>+44 7985199302</p>
                <div className="d-flex icons-WT">
                    <div className="ml-3 cursorPointer">
                        <Whatssap onClick={()=> window.location.replace('https://wa.me/4407985199302?text=Hello Rafa! I would like to talk with you about an opportunity.')} />
                    </div>
                    <div className="ml-3 cursorPointer telegram-icon">
                        <Telegram onClick={()=> window.location.replace('https://t.me/koulinn')} />
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center mb-3">
                <p>rafauxdev@gmail.com</p>
                <div className="ml-3 cursorPointer">
                    <AiOutlineMail onClick={()=> window.location.replace("mailto:rafauxdev@gmail.com")} />
                </div>

            </div>
            {props.footer ? <p>Rafael Verzola Peres de Lima</p> : ''}
        </div>
    )
}

export default ContactText
