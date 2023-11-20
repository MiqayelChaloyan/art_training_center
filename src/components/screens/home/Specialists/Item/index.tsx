import { memo } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/ui/Button';

import { urlFor } from '../../../../../../sanity/sanity';
import { getCourseById } from '../../../../../../sanity/services/courses.service';

import styles from './style.module.sass';

const Images = ({ images }: any) => {
    const firstDivImages = images.slice(0, Math.ceil(images.length / 2));
    const secondDivImages = images.slice(Math.ceil(images.length / 2));


    return (
        <div>
            <div className={styles.images_block}>
                {firstDivImages.map((image: any) => {
                    const urlForImageOne = urlFor(image)
                        .auto('format')
                        .fit('max')
                        .url();

                    return (
                        <img key={image._key} src={urlForImageOne} alt={image.alt} className={styles.img_small} />
                    );
                })}
            </div>
            <div className={styles.images_block}>
                {secondDivImages.map((image: any) => {
                    const urlForImageOne = urlFor(image)
                        .auto('format')
                        .fit('max')
                        .url();

                    return (
                        <img key={image._key} src={urlForImageOne} alt={image.alt} className={styles.img_small} />
                    );
                })}
            </div>
        </div>
    );
};

const Item = ({ item }: any) => {
    const router = useRouter();

    const urlForImage = urlFor(item.specialists_section_image)
        .auto('format')
        .fit('max')
        .url();

    const func = async () => {
        const data = await getCourseById(item.categories._ref);
        return router.push(`/courses/${data.slug}`);
    };

    return (
        <div key={item._key} className={styles.item}>
            <div className={styles.box_img}>
                <img src={urlForImage} alt={item.alt} className={styles.img} />
            </div>
            <div className={styles.box}>
                <h2 className={styles.subtitle}>{item.subtitle}</h2>
                <Button
                    className={styles.contact_btn}
                    text='Make Up'
                    onClick={func}
                />
                <div className={styles.box_images}>
                    {Images({ images: item.specialists_section_images[0].images })}
                </div>
            </div>
        </div>
    );
};

export default memo(Item);