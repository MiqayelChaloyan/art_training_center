import React, { FC, memo, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/types';

import { NextArrow } from '../NextArrow';
import { PrevArrow } from '../PrevArrow';

import { HomeContent } from '../../../../sanity/sanity-queries/home-queries';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './style.module.sass';


type Props = {
    images: HomeContent[]
};

const Carousel: FC<Props> = ({ images }) => {
    const swiperRef = useRef<SwiperCore>();  


    const result: JSX.Element[] = images.map((image: any) => (
        <SwiperSlide key={image.key}>
            {image}
        </SwiperSlide>
    ));

    return (
        <div className={styles.swiper}>
            <div className={styles.arrows_group}>
                <button onClick={() => swiperRef.current?.slidePrev()}><PrevArrow/></button>
                <button onClick={() => swiperRef.current?.slideNext()}><NextArrow/></button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.mySwiper}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {result}
            </Swiper>
        </div>
    );
};

export default memo(Carousel);

