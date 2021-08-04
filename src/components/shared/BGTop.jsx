import React from 'react'
import { ReactComponent as TopSvg } from '../../assets/BG/BGSVGTopGrad.svg'

function BGTop(props) {
    return (
        <div className={props.invert ? "w-100 h-100 position-absolute d-flex align-items-end" : "w-100 h-100 position-absolute d-flex"}>
            <TopSvg className={props.invert ? "w-100 h-100 background invert" : "w-100 h-100 background"} ></TopSvg>
        </div>
    )
}

export default BGTop
