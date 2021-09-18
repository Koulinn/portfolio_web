import React from 'react'
import StackedCarrousel from './Carousel/StackedCarrousel'
import ScrollAnimation from 'react-animate-on-scroll';
import { withRouter } from 'react-router-dom'


function CommonSection(props) {
    return (
        <section className="section-Margin">
            <div className="row">
                <div className="col-12 col-md-6 commonSection-Text" style={{ order: props.order }}>

                    <h2>
                        {props.title ? props.title : 'Section Title'} <span className="spanText">{props.spanText}</span>
                    </h2>
                    <p>
                        {props.text ? props.text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci quia a ipsa quid'}
                    </p>


                </div>



                <div className="commonSection-image-wrapper col-12 col-md-6">

                    <ScrollAnimation animateIn={props.order === "2" ? 'animate__fadeInTopLeft' : 'animate__fadeInTopRight'} offset={200} >
                        <>
                            {props.isCarousel ? <StackedCarrousel carouselItems={props.carouselItems}></StackedCarrousel> :
                                props.linkUrl ? <a href={props.linkUrl}><img className="ImgShadowEffect" src={props.imgURL} alt='' /></a> :
                                    <img className="ImgShadowEffect" src={props.imgURL} alt='' />
                            }
                            {props.linkUrl ? <a className="card-link" href={props.linkUrl} download={props.download}>{props.linkText}</a> : ''}

                        </>
                    </ScrollAnimation>

                </div>
                {props.subsection ?
                    <div className="mx-auto">
                        <ScrollAnimation animateIn={props.order === "2" ? 'animate__fadeInTopLeft' : 'animate__fadeInTopRight'} offset={200} >
                            {props.subsection}
                        </ScrollAnimation>
                    </div>

                    : ''}

            </div>

        </section>
    )
}

export default withRouter(CommonSection)
