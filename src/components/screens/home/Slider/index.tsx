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


type MainProps = {
    data: HomeContent[];
};

const SliderMain: FC<MainProps> = ({ data }) => {
    // const router = useRouter();
    const sliderRef = useRef(null);
    // const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
    // const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
    // const [slideCount, setSlideCount] = useState<number>(0);

    // useEffect(() => {
    //     const slider = sliderRef.current;
    // 	const slideCount = slider && slider.innerSlider.state.slideCount;
    // 	setSlideCount(slideCount);
    // 	setIsFirstSlide(slider && slider.innerSlider.state.currentSlide === 0);
    // 	setIsLastSlide(slider && slider.innerSlider.state.currentSlide === slider.innerSlider.state.slideCount - 1);
    // }, []);

    const settingsSlider = {
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // arrows: false,
        // dots: false,
        // infinite: false,
        // speed: 2500,
        // autoplay: true,
        // autoplaySpeed: 2500,
        // beforeChange: (_: any, nextSlide: number) => {
        // 	setIsFirstSlide(nextSlide === 0);
        // 	setIsLastSlide(nextSlide === settingsSlider.slidesToShow - 1);
        // },
        // responsive: [
        // 	{
        // 		breakpoint: 991,
        // 		// settings: {
        // 		// 	slidesToShow: 1,
        // 		// }
        // 	}
        // ]
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
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