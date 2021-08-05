import React from 'react'
import { ReactComponent as LinLogo } from '../../../assets/Icons/linkedin.svg'
import { ReactComponent as GitLogo } from '../../../assets/Icons/GitHub-logo 1.svg'
import { ReactComponent as IxDFLogo } from '../../../assets/Icons/IxDF.svg'

function FooterSocialMedia() {
    return (
        <div className="col mt-5 socialMedia justify-content-center justify-content-md-end d-flex">
            <div><LinLogo className="cursorPointer" /></div>
            <div className="mx-4 "><GitLogo className="cursorPointer" /></div>
            <div><IxDFLogo className="cursorPointer" /></div>
        </div>
    )
}

export default FooterSocialMedia
