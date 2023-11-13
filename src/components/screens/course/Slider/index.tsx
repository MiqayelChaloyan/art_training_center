import React, { FC } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { generateImageUrl } from '@/utils/imageGenerate';

import styles from './styles.module.sass';
// import Button from '@/components/ui/Button';
import { PortableText } from '@portabletext/react';
import components from '@/utils/PortableTextComponents';

import { useRouter } from 'next/router';
import { Courses } from '../../../../../sanity/sanity-queries/courses';
import Button from '@/components/ui/Button';


type MainProps = {
    course: Courses;
};

const SliderMain: FC<MainProps> = ({ course }) => {

    const router = useRouter();

    // async function navigate() {
    //     // router.push({
    //     //     pathname: '/',
    //     //     hash: 'footer',
    //     // }, undefined, { scroll: true });
    //     console.log('scroll');
    // };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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