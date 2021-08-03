import React from 'react'
import StackedCarrousel from './Carousel/StackedCarrousel'

function CommonSection(props) {
    return (
        <section className="section-Margin">
            <div className="row">
                <div className="col-12 col-md-6 commonSection-Text" style={{order:props.order}}>
                    <h2>
                        Section Title
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci quia a ipsa quid
                    </p>

                </div>

                <div className="col-12 col-md-6 sectionImgs">
                    <StackedCarrousel></StackedCarrousel>

                </div>

            </div>
            
        </section>
    )
}

export default CommonSection
