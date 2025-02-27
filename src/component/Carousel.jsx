import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items, show, scroll, dot }) => {
  const settings = {
    arrows: false,
    slidesToShow: show,
    slidesToScroll: scroll,
    autoplaySpeed: 2500,
    speed: 500,
    dots: dot,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 2500,
        },
      },
    ],

  };
  return (
    <Slider {...settings}>
      {items}
    </Slider>
  )
}


export default Carousel;