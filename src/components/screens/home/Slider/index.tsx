import React, { FC } from 'react';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import { generateImageUrl } from '@/utils/imageGenerate';

import styles from './styles.module.sass';
import Button from '@/components/ui/Button';
import { PortableText } from '@portabletext/react';
import components from '@/utils/PortableTextComponents';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type MainProps = {
    data: HomeContent[];
};

const SliderMain: FC<MainProps> = ({ data }) => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    if (!data[0]) {
        return null;
    };

    const scrollToElement = (id: string) => {
        const container: HTMLElement | null = document.getElementById(id);
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const slidesItems = data[0].main_section.map((item: any): JSX.Element => (
        <div key={item._key} className={styles.emplay_slide}>
            <div className={styles.box} style={{ backgroundImage: `url(${generateImageUrl(item.main_section_image.asset._ref)})` }}>
                <div className={styles.contact}>
                    <h1 className={styles.title}>{item.subtitle}</h1>
                    <PortableText value={item?.content} components={components} />
                    <Button
                        className={styles.contact_btn}
                        text='Contact Us'
                        onClick={() => scrollToElement('contact')}
                    />
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.section}>
            <div className={styles.wrap}>
                <div className={styles.emplay} ref={emblaRef}>
                    <div className={styles.emplay_container}>
                        {slidesItems}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SliderMain;
