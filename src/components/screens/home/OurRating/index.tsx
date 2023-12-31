import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Container from '@/components/components/Container';
import Rating from './Ratings';
import MobileCards from './MobileCards';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import { Inter } from 'next/font/google';

import styles from './style.module.sass';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

type Props = {
    data: HomeContent[]
};

const OurRating: FC<Props> = ({ data }) => {
    const { t } = useTranslation();
    const ratings = data[0].our_rating_section.slice(0, 3);

    const settingsSlider = {
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: true,
    };

    return (
        <div id='our-rating' className={styles.container}>
            <Container>
                <h1 className={`${styles.title} ${inter.variable}`}>{t('pages.rating')}</h1>
                <div className={styles.feedbacks}>
                    <div className={styles.row}>
                        <Rating data={ratings} />
                    </div>
                </div>
                <div className={styles.mobile_cards}>
                    <Slider {...settingsSlider} className={styles.slider}>
                        {MobileCards(ratings)}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default memo(OurRating);