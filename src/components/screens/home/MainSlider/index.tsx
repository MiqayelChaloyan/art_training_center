import React, { FC, memo } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import SlideItem from './SlideItem';

import { urlFor } from '../../../../../sanity/sanity';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './styles.module.sass';

type Props = {
    data: HomeContent[];
};

const MainSlider: FC<Props> = ({ data }) => {
    const items = data[0].main_section;
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', duration: 50 }, [Autoplay()]);

    if (!items) {
        return null;
    };    

    const scrollToElement = () => {
        const container: HTMLElement | null = document.getElementById('contact');
        if (container) {
           container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const slidesItems = items.map((item: any): JSX.Element => {
        const urlForImage = urlFor(item.image)
            .auto('format')
            .fit('max')
            .url();

        return (
            <SlideItem
                key={item.slug}
                url={urlForImage}
                alt={item.image.alt}
                subtitle={item.title}
                content={item.content}
                scrollToElement={scrollToElement}
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