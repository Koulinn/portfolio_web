import React from 'react'
import { ReactComponent as LinLogo } from '../../../assets/Icons/linkedin.svg'
import { ReactComponent as GitLogo } from '../../../assets/Icons/GitHub-logo 1.svg'
import { ReactComponent as IxDFLogo } from '../../../assets/Icons/IxDF.svg'



function FooterSocialMedia() {
    return (
        <div className="col mt-5 socialMedia justify-content-center justify-content-md-end d-flex">
            <div onClick={()=> (window.location = "https://www.linkedin.com/in/rafavpl/")}><LinLogo className="cursorPointer"/></div>
            <div onClick={()=> (window.location = "https://github.com/Koulinn")} className="mx-4 "><GitLogo className="cursorPointer" /></div>
            <div onClick={()=> (window.location = "https://www.interaction-design.org/rafael-lima")}><IxDFLogo className="cursorPointer" /></div>
        </div>
    )
}

export default FooterSocialMedia
