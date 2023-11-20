import React, { FC, memo } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import SlideItem from './SlideItem';

import { urlFor } from '../../../../../sanity/sanity';

import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './styles.module.sass';

type Props = {
    course: Courses;
};

const MainSlider: FC<Props> = ({ course }) => {
    const items = course.course_main;
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', duration: 50 }, [Autoplay()]);

    if (!items) {
        return null;
    };

    const slidesItems = items.map((item: any): JSX.Element => {
        const urlForImage = urlFor(item.course_section_image)
            .auto('format')
            .fit('max')
            .url();

        return (
            <SlideItem
                key={item._key}
                url={urlForImage}
                subtitle={item.subtitle}
                content={item.content}
                alt={item.course_section_image.alt}
            />
        );
    });

    return (
        <div className={styles.emplay} ref={emblaRef}>
            <div className={styles.emplay_container}>
                {slidesItems}
            </div>
        </div>
    );
};

export default memo(MainSlider);