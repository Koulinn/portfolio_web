import React from 'react'
import { Container } from 'react-bootstrap'
import { ReactComponent as ThinkOut } from '../../assets/Imgs/thinkOutside.svg'
import { ReactComponent as MainLogo } from '../../assets/logo/Logo.svg'


function Hero(props) {
    return (
        <div id="Hero" className="p-0 w-100 d-flex justify-content-center align-items-center">
            <Container className={props.isTabletOrMobile ? 
                "d-flex justify-content-center align-items-center" 
                : 
                "d-flex justify-content-between align-items-center" }
            >
                {props.isTabletOrMobile ? 
                
                <div id="logo-Hero" className="d-flex flex-column align-items-center justify-content-center">
                    <MainLogo></MainLogo>
                    <span className="hero-TextLogo mt-2">Front-End/UX Designer</span>
                </div>
                
                :
                <>
                    <div>
                        <h1>{props.heroTextFirst} <span className="spanH1">{props.heroTextSpan}</span> <br></br> {props.heroTextSecond} </h1>
                    </div>
                    <div>
                        <ThinkOut></ThinkOut>
                    </div>
                </>
                }
            </Container>

        </div>
    )
}

export default Hero
