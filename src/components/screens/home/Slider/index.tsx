import React, { FC, useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import { generateImageUrl } from '@/utils/imageGenerate';

import styles from './styles.module.sass';
import Button from '@/components/ui/Button';
import { PortableText } from '@portabletext/react';
import components from '@/utils/PortableTextComponents';

import { useRouter } from 'next/router';
import { Link as ScrollLink, scroller } from 'react-scroll';

type MainProps = {
    data: HomeContent[];
};

const SliderMain: FC<MainProps> = ({ data }) => {
    // const router = useRouter();
    const sliderRef = useRef(null);

    // useEffect(() => {
	// 	const handleScroll = () => {
	// 		// setIsSticky(window.scrollY > 0);
	// 	};
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

    const settingsSlider = {
        infinite: true,
        speed: 4500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    if (!data[0]) {
        return null;
    };

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
                        data-scroll="#footer"
                    />
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.section}>
            <div className={styles.wrap}>
                <Slider {...settingsSlider} ref={sliderRef}>
                    {slidesItems}
                </Slider>
            </div>
        </div>

    );
};

export default SliderMain;