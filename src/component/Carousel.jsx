import React from 'react';
import Slider from "react-slick";

const Carousel = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div>
            <Slider {...settings}>
                
            </Slider>
        </div>
    )
}


export default Carousel; 