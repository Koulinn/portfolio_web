import React from 'react'
import { Container } from 'react-bootstrap'
import { ReactComponent as ThinkOut } from '../../assets/Imgs/thinkOutside.svg'

function Hero(props) {
    return (
        <div id="Hero" className="p-0 w-100 d-flex justify-content-center align-items-center">
            <Container className="d-flex justify-content-between align-items-center">
                
                <div>
                    <h1>{props.heroTextFirst} <span className="spanH1">{props.heroTextSpan}</span> <br></br> {props.heroTextSecond} </h1>
                </div>
                <div>
                    <ThinkOut></ThinkOut>
                </div>
            </Container>

        </div>
    )
}

export default Hero
