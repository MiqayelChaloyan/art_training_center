import { FC } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Container from '@/components/components/Container';
import Rating from './Ratings';
import MobileCards from './MobileCards';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: HomeContent[];
};

const OurRating: FC<Props> = ({ data }) => {

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
                <div className={styles.feedbacks}>
                    <h1 className={styles.title}>OUR RATING</h1>
                    <div className={styles.row}>
                        <Rating data={data[0].our_rating_section} />
                    </div>
                </div>
            </Container>
            <div className={styles.mobile_cards}>
                <Slider {...settingsSlider} className={styles.slider}>
                    {MobileCards(data[0].our_rating_section)}
                </Slider>
            </div>
        </div>
    );
};

export default OurRating;