import React from 'react'
import StackedCarrousel from './Carousel/StackedCarrousel'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link, withRouter } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function CommonSection(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }
    return (
        <section className='section-Margin'>
            <div className='row'>
                <div
                    className='col-12 col-md-6 commonSection-Text'
                    style={{ order: props.order }}
                >
                    <div>
                        <h2>{props.title ? props.title : 'Section Title'}</h2>
                        <p>
                            {props.text
                                ? props.text
                                : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci quia a ipsa quid'}
                        </p>
                    </div>
                </div>

                <div
                    className={
                        'commonSection-image-wrapper col-12 col-md-6 ' +
                        (isTabletOrMobile ? 'mt-3' : '')
                    }
                >
                    <ScrollAnimation
                        animateIn={
                            props.order === '2'
                                ? 'animate__fadeInTopLeft'
                                : 'animate__fadeInTopRight'
                        }
                        offset={200}
                    >
                        <>
                            {props.isCarousel ? (
                                <StackedCarrousel
                                    carouselItems={props.carouselItems}
                                ></StackedCarrousel>
                            ) : props.linkUrl ? (
                                <a href={props.linkUrl}>
                                    <img
                                        className='ImgShadowEffect'
                                        src={props.imgURL}
                                        alt=''
                                    />
                                </a>
                            ) : (
                                <img
                                    className='ImgShadowEffect'
                                    src={props.imgURL}
                                    alt=''
                                />
                            )}
                            {props.linkUrl && (
                                <a
                                    className='card-link'
                                    href={props.linkUrl}
                                    download={props.download}
                                >
                                    {props.linkText}
                                </a>
                            )}
                            {props.internalUrl && (
                                <Link
                                    to={props.internalUrl}
                                    onClick={scrollToTop}
                                    className='card-link'
                                >
                                    {props.linkText}
                                </Link>
                            )}
                        </>
                    </ScrollAnimation>
                    {props.subsection && (
                        <div className='mx-auto'>
                            <ScrollAnimation
                                animateIn={
                                    props.order === '2'
                                        ? 'animate__fadeInTopLeft'
                                        : 'animate__fadeInTopRight'
                                }
                                offset={200}
                            >
                                {props.subsection}
                            </ScrollAnimation>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default withRouter(CommonSection)
