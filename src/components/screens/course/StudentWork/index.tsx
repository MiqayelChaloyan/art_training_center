import { FC, memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import { Inter } from 'next/font/google';

import Container from '@/components/components/Container';
import Button from '@/components/ui/Button';
import Cancel from '@/components/icons/Cancel';
import Carousel from '@/components/ui/Swiper';

import { urlFor } from '../../../../../sanity/sanity';
import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './style.module.sass';

type Props = {
    course: Courses
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const StudentWork: FC<Props> = ({ course }) => {
    const [initialLoadCourses, setInitialLoadCourses] = useState<number>(8);
    const [isFullscreen, setFullscreen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const { t } = useTranslation();

    useEffect(() => setInitialLoadCourses(8), [course]);


    const scrollToElement = () => {
        const container: HTMLElement | null = document.getElementById('contact');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const images = course.student_works.slice(0, initialLoadCourses).map((item: any) => {

        const urlForImage = urlFor(item)
            .auto('format')
            .fit('max')
            .url();

        return (
            <div
                key={item._key}
                className={`${styles.img_block} ${isFullscreen ? styles.fullscreenContainer : ''}`}
                onClick={() => {
                    setFullscreen(true);
                    setImageUrl(urlForImage);
                }}
            >
                <Image
                    src={urlForImage}
                    alt={item.alt}
                    priority
                    className={styles.work_img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        );
    });

    const handleLoad = () => setInitialLoadCourses(initialLoadCourses + 4);

    const handleBackLoad = () => setInitialLoadCourses(initialLoadCourses - 4);

    return (
        <div id='student-work' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={`${styles.title} ${inter.variable}`}>{t('pages.student_work')}</h1>
                <div className={styles.works}>
                    <div className={styles.student_work}>
                        {images}
                    </div>
                    {
                        isFullscreen && (
                            <div className={styles.zoom}>
                                <div>
                                    <button className={styles.close}
                                        title='Close'
                                        onClick={() => setFullscreen(false)}>
                                        <Cancel
                                            width='104'
                                            height='104'
                                            fill='white'
                                        />
                                    </button>
                                </div>
                                <Image
                                    src={imageUrl}
                                    alt='zoom-image'
                                    priority
                                    className={styles.img}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )
                    }
                    {course.student_works.length < 8 ? (
                        <div className={styles.block_buttons}>
                            <div className={styles.btn_group}>
                                <Button
                                    className={styles.contact_button}
                                    text={t('button.contact-us')}
                                    onClick={scrollToElement}
                                />
                            </div>

                        </div>
                    ) : (
                        <div className={styles.block_buttons}>
                            <div className={styles.btn_group}>
                                <Button
                                    className={styles.view_more_button}
                                    text={course.student_works.length > initialLoadCourses ? t('button.view-more') : t('button.show-less')}
                                    onClick={course.student_works.length > initialLoadCourses ? handleLoad : handleBackLoad}
                                />
                            </div>
                            <div className={styles.btn_group}>
                                <Button
                                    className={styles.contact_button}
                                    text={t('button.contact-us')}
                                    onClick={scrollToElement}
                                />
                            </div>

                        </div>
                    )}
                </div>
                <div className={styles.slider}>
                    <Carousel images={images} />
                </div>
            </Container>
        </div>
    );
};

export default memo(StudentWork);