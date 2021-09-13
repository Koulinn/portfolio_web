import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCarouselDot from './CustomCarouselDot';
import { useMediaQuery } from 'react-responsive'
import { isDesktop } from './utils.js'



function StackedCarrousel(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <Carousel
                swipeable={true}
                minimumTouchDrag={80}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .7s linear"
                transitionDuration={700}
                containerClass="carousel-container"
                removeArrowOnDeviceType={"mobileOrTablet"}
                deviceType={isDesktop(!isTabletOrMobile)}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                customDot={<CustomCarouselDot />}
                renderDotsOutside={true}
            >

                {props.carouselItems.map((item, i) =>

                    <>
                        <div className='d-flex flex-column mt-3 justify-content-center align-content-center'>
                            <a href={item.link}><img className="carousel-image" height='256px' src={item.image} alt="" /></a>
                            <a href={item.link}><h4>{item.title}</h4></a>
                            <h6>{item.info}</h6>
                        </div>
                    </>
                )}


            </Carousel>


        </>
    )
}

export default StackedCarrousel
