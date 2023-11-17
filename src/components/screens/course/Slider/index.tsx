import React, { FC } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { PortableText } from '@portabletext/react';
import components from '@/utils/PortableTextComponents';
import { generateImageUrl } from '@/utils/imageGenerate';

import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './styles.module.sass';

type MainProps = {
    course: Courses;
};

const SliderMain: FC<MainProps> = ({ course }) => {

    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
    };

    if (!course.course_main) {
        return null;
    };

    const slidesItems = course.course_main.map((item: any): JSX.Element => (
        <div key={item._key}>
            <div className={styles.box}>
                <img src={generateImageUrl(item.course_section_image.asset._ref)} alt={item.alt} className={styles.img} />
                <div className={styles.contact}>
                    <h1 className={styles.title}>{item.subtitle}</h1>
                    <PortableText value={item?.content} components={components} />
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