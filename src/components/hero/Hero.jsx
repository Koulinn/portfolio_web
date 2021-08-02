import React from 'react'
import { ReactComponent as BG }  from '../../assets/BG/BG.svg'
import {Container} from 'react-bootstrap'

function Hero() {
    return (
        <Container className="p-0" fluid>
            <BG id="BG-Hero"></BG>
        </Container>
    )
}

export default Hero
