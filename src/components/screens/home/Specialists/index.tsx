
import styles from './Specialists.module.sass';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '@/components/ui/Button';
import { FC, useEffect, useState } from 'react';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import { generateImageUrl } from '@/utils/imageGenerate';

const ImageComponent = ({ images }: any) => {
    const firstDivImages = images.slice(0, Math.ceil(images.length / 2));
    const secondDivImages = images.slice(Math.ceil(images.length / 2));

    return (
        <div>
            <div className={styles.images_block}>
                {firstDivImages.map((image: any) => (
                    <img key={image._key} src={generateImageUrl(image.asset._ref)} alt={image.alt} className={styles.img_small} />
                ))}
            </div>
            <div className={styles.images_block}>
                {secondDivImages.map((image: any) => (
                    <img key={image._key} src={generateImageUrl(image.asset._ref)} alt={image.alt} className={styles.img_small} />
                ))}
            </div>
        </div>
    );
};


type SectionCoursesProps = {
    data: HomeContent[];
};
const Specialists: FC<SectionCoursesProps> = ({ data }) => {
    const slidesItems = data[0].specialists_section.map((item: any) => (
        <div key={item._key} className={styles.item}>
            <div className={styles.box_img}>
                <img src={generateImageUrl(item.specialists_section_image.asset._ref)} alt={item.alt} className={styles.img} />
            </div>
            <div className={styles.box}>
                <h2 className={styles.subtitle}>{item.subtitle}</h2>
                <Button
                    className={styles.contact_btn}
                    text='Make Up'
                    onClick={() => console.log('click')}
                />
                <div className={styles.box_images}>
                    {ImageComponent({ images: item.specialists_section_images[0].images })}
                </div>
            </div>
        </div>
    ));

    const settings = {
        dots: true,
        infinite: true,
        speed: 4500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3500,
    };

    return (
        <div id='circleProgress' className={styles.circle_progress}>
            <div className={styles.skew} />
            <div className={styles.contain}>
                <h1 className={styles.title}>Specialists</h1>
                <div className={styles.slider}>
                    <Slider {...settings}>
                        {slidesItems}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Specialists;