import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({items,show,scroll,dot})=>{
    const settings = {
        slidesToShow: {show},
        slidesToScroll: {scroll},
        autoplaySpeed: 2500,
        speed: 500,
        dots: {dot},
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplaySpeed: 2500,
              },
            },
          ],
        
      };
    return(
        <div className='bg-red-200 h-full w-full'>
            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    )
}


export default Carousel; 