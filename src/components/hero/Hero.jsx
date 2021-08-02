import React from 'react'
import { ReactComponent as BG }  from '../../assets/BG/BG.svg'
import {Container} from 'react-bootstrap'

function Hero() {
    return (
        <div className="p-0 w-100">
            <BG id="BG-Hero"></BG>
        </div>
    )
}

export default Hero
