import { FC, memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Inter } from 'next/font/google';

import Container from '@/components/components/Container';
import Button from '@/components/ui/Button';

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
    const { t } = useTranslation();

    useEffect(() => setInitialLoadCourses(8), [course]);


    const scrollToElement = () => {
        const container: HTMLElement | null = document.getElementById('contact');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };    

    const images = course.student_works[0].images.slice(0, initialLoadCourses).map((item: any) => {

        const urlForImage = urlFor(item)
            .auto('format')
            .fit('max')
            .url();

        return (
            <div key={item._key} className={styles.img_block}>
                <img src={urlForImage} alt={item.alt} className={styles.work_img} />
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
                <div className={styles.student_work}>
                    {images}
                </div>
                {course.student_works[0].images.length < 8 ? (
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
                                text={course.student_works[0].images.length > initialLoadCourses ? t('button.view-more') : t('button.show-less')}
                                onClick={course.student_works[0].images.length > initialLoadCourses ? handleLoad : handleBackLoad}
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
            </Container>
        </div>
    );
};

export default memo(StudentWork);