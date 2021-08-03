import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCarouselDot from './CustomCarouselDot';

function StackedCarrousel(props) {
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
        <div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                customDot={<CustomCarouselDot/>}
                renderButtonGroupOutside={true}
            >
                <div><img className="carousel-image" src="http://placekitten.com/200/300" alt="" /></div>
                <div><img className="carousel-image" src="https://baconmockup.com/200/300" alt="" /></div>
                <div><img className="carousel-image" src="https://www.placecage.com/g/200/300" alt="" /></div>
                <div><img className="carousel-image" src="http://lorempixel.com/200/300/sports/" alt="" /></div>
                
            </Carousel>

        </div>
    )
}

export default StackedCarrousel
