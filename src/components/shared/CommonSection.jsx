import React from 'react'
import StackedCarrousel from './Carousel/StackedCarrousel'
import { useScrollYPosition } from 'react-use-scroll-position';



function CommonSection(props) {
    const scrollY = useScrollYPosition();
    return (
        <section className="section-Margin">
            <div className="row">
                <div className="col-12 col-md-6 commonSection-Text" style={{ order: props.order }}>
                    <h2>
                        Section Title <span className="spanText">{props.spanText}</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci quia a ipsa quid {console.log(scrollY)}
                    </p>

                </div>

                <div className={(scrollY > props.YIni) && (scrollY < props.YEnd) && (props.order === '2') ? "col-12 col-md-6 sectionImgsLeft sectionImgsShow" :
                    (scrollY > props.YIni) && (scrollY < props.YEnd) && (props.order === '0') ? "col-12 col-md-6 sectionImgsRight sectionImgsShow" :
                    props.order === '0' ? " col-12 col-md-6 sectionImgsRight" :
                        " col-12 col-md-6 sectionImgsLeft"}>
                    <StackedCarrousel></StackedCarrousel>

                </div>

            </div>

        </section>
    )
}

export default CommonSection
