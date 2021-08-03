import React from 'react'
import { ReactComponent as CurvedBG } from '../../assets/BG/BGBody.svg'



function BGBody() {
    return (
        <div className="position-absolute w-100" style={{zIndex:"-1"}}>
            <CurvedBG className="BGRotate"></CurvedBG>
            
        </div>
    )
}

export default BGBody
