import React, { FC } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HomeContent } from "../../../../../sanity/sanity-queries/home-queries";
import { generateImageUrl } from "@/utils/imageGenerate";

import styles from './styles.module.sass';
import Button from "@/components/ui/Button";
import { PortableText } from '@portabletext/react'
import components from "@/utils/PortableTextComponents";

type MainProps = {
    data: HomeContent[];
}

const SliderMain: FC<MainProps> = ({ data }) => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    if (!data[0]) {
        return null
    }

    const slidesItems = data[0].main_section.map((item: any): JSX.Element => (
        <div key={item._key}>
            <div className={styles.box}>
                <img src={generateImageUrl(item.main_section_image.asset._ref)} alt={item.alt} className={styles.img} />
                <div className={styles.contact}>
                    <h1 className={styles.title}>{item.subtitle}</h1>
                    <PortableText value={item?.content} components={components} />
                    <Button
                        className={styles.contact_btn}
                        text='Contact Us'
                        onClick={() => console.log('click')}
                    />
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.section}>
            <div className={styles.wrap}>
                <Slider {...settings}>
                    {slidesItems}
                </Slider>
            </div>
        </div>

    );
};

export default SliderMain;























const Images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "Image 1",
        title: "Lamborghini Huracan Performante",
        description:
            "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "Image 2 ",
        title: "Porsche 911 Turbo S",
        description:
            "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
    },
];