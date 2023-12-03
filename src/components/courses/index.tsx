import { FC, memo } from 'react';

import Link from 'next/link';
import { Inter } from 'next/font/google';

import { useTranslation } from 'react-i18next';

import { Courses } from '../../../sanity/sanity-queries/courses';

import styles from './style.module.sass';

type CoursesModalProps = {
    courses: Courses[]
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const chunkSize = 4;

const chunkArray = (arr: any, size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
};

const CoursesModal: FC<CoursesModalProps> = ({ courses }) => {
    const data = chunkArray(courses, chunkSize);
    const { t } = useTranslation();        

    if (!courses) {
        return null;
    };

    const coursesList = data.map((innerArray) => (
        <div key={innerArray[0]._id} className={styles.courses}>
            {innerArray.map((course: Courses) => (
                <Link href={`/courses/${course.slug}`} aria-label={`/courses/${course.slug}`} key={course._id} className={styles.link}>
                    <p className={`${styles.course} ${inter.variable}`}>{course.course_name}</p>
                </Link>
            ))}
        </div>
    ));

    return (
        <div className={styles.courses_container}>
            <p className={`${styles.title} ${inter.variable}`}>{t('pages.courses')}</p>
            <div className={styles.list}>
                {coursesList}
            </div>
        </div>
    );
};

export default memo(CoursesModal);
