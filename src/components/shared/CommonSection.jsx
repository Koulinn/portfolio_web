import React from 'react'
import StackedCarrousel from './Carousel/StackedCarrousel'
import ScrollAnimation from 'react-animate-on-scroll';



function CommonSection(props) {
    return (
        <section className="section-Margin">
            <div className="row">
                <div className="col-12 col-md-6 commonSection-Text" style={{ order: props.order }}>

                    <h2>
                        Section Title <span className="spanText">{props.spanText}</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci quia a ipsa quid
                    </p>


                </div>


                <div className="col-12 col-md-6">
                    <ScrollAnimation animateIn={props.order === "2" ? 'animate__fadeInTopLeft' : 'animate__fadeInTopRight' } offset={200} >
                        <StackedCarrousel></StackedCarrousel>
                    </ScrollAnimation>

                </div>
            </div>

        </section>
    )
}

export default CommonSection
