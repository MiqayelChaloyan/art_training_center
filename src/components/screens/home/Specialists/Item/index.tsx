import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useRouter } from 'next/router';
import Image from 'next/image';

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
                        <Image
                            key={image._key}
                            src={urlForImageOne}
                            alt={image.alt}
                            priority
                            className={styles.img_small}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
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
                        <Image
                            key={image._key}
                            src={urlForImageOne}
                            alt={image.alt}
                            priority
                            className={styles.img_small}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Item = ({ item }: any) => {
    const router = useRouter();
    const { i18n } = useTranslation();

    const urlForImage = urlFor(item.specialists_section_image)
        .auto('format')
        .fit('max')
        .url();

    const goCoursePage = async () => {
        const data = await getCourseById(item.categories._ref, i18n.language);
        return router.push(`${i18n.language}/courses/${data.slug}`);
    };

    return (
        <div key={item._key} className={styles.item}>
            <div className={styles.box_img}>
                <Image
                    key={item._key}
                    src={urlForImage}
                    alt={item.specialists_section_image.alt}
                    priority
                    className={styles.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.box}>
                <div className={styles.header}>
                    <div className={styles.point} />
                    <h2 className={styles.subtitle}>{item.title}</h2>
                </div>
                <Button
                    className={styles.contact_btn}
                    text={item.course_name}
                    onClick={goCoursePage}
                />
                <div className={styles.box_images}>
                    {Images({ images: item.specialists_section_images[0].images })}
                </div>
            </div>
        </div>
    );
};

export default memo(Item);