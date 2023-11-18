// import React, { FC } from 'react';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// import { PortableText } from '@portabletext/react';
// import components from '@/utils/PortableTextComponents';
// import { generateImageUrl } from '@/utils/imageGenerate';

// import { Courses } from '../../../../../sanity/sanity-queries/courses';

// import styles from './styles.module.sass';

// type Props = {
//     course: Courses;
// };

// const MainSlider: FC<Props> = ({ course }) => {

//     const settings = {
//         speed: 1500,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//           arrows: false,
//         dots: false,
//         infinite: true,
//         centerMode: true,
//           centerPadding: '0',
//         // variableWidth: true,
//           focusOnSelect: true
//     };

//     if (!course.course_main) {
//         return null;
//     };

//     const slidesItems = course.course_main.map((item: any): JSX.Element => (
//         <div key={item._key}>
//             <div className={styles.box}>
//                 <img src={generateImageUrl(item.course_section_image.asset._ref)} alt={item.alt} className={styles.img} />
//                 <div className={styles.contact}>
//                     <h1 className={styles.title}>{item.subtitle}</h1>
//                     <PortableText value={item?.content} components={components} />
//                 </div>
//             </div>
//         </div>
//     ));

//     return (
//         <div className={styles.section}>
//             <div className={styles.wrap}>
//                 <Slider {...settings}>
//                     {slidesItems}
//                 </Slider>
//             </div>
//         </div>

//     );
// };

// export default MainSlider;


import React, { FC, memo, useCallback } from 'react';

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
                alt={item.course_section_image.alt}
                subtitle={item.subtitle}
                content={item.content}
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