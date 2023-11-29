import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Container from '@/components/components/Container';
import Item from './Item';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

type SectionCoursesProps = {
    data: HomeContent[];
};

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrow_next}`}
            style={{ ...style, display: 'block', width: 50, height: 50 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrow_prev}`}
            style={{ ...style, display: 'block', width: 50, height: 50 }}
            onClick={onClick}
        />
    );
};

const Specialists: FC<SectionCoursesProps> = ({ data }) => {
    const { t } = useTranslation();

    const slidesItems = data[0].specialists_section.map((item: any, index: number) => (
        <Item key={item.slug} item={item} index={index} />
    ));

    const settings = {
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div id='specialists' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <div className={`${styles.title} ${inter.variable}`}>
                    {t('pages.specialists')}
                </div>
                <div className={styles.specialists}>
                    <Slider {...settings}>
                        {slidesItems}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Specialists;