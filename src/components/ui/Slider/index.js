import React from "react";
import Slider from "react-slick";

export default function SliderKit({ children }) {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        initialSlide: 0,
        arrows: false,
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            {...children}
        </Slider>
    );
}