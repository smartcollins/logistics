import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({items})=>{
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        speed: 500,
        dots: true,
        infinite: true,
        swipeToSlide: true,
        autoplay: true
        
      };
    return(
        <div className='bg-red-200'>
            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    )
}


export default Carousel; 