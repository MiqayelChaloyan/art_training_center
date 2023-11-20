import { FC, memo } from 'react';
import Link from 'next/link';

import { Courses } from '../../../sanity/sanity-queries/courses';

import styles from './style.module.sass';

type CoursesModalProps = {
    courses: Courses[];
}

const chunkSize = 4;

const chunkArray = (arr: any, size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
};

const CoursesModal: FC<CoursesModalProps> = ({ courses }) => {
    const data = chunkArray(courses, chunkSize);

    if (!courses) {
        return null;
    };

    const coursesList = data.map((innerArray) => (
        <div key={innerArray[0]._id} className={styles.courses}>
            {innerArray.map((course: Courses) => (
                <Link href={`/courses/${course.slug}`} aria-label='/' key={course._id} className={styles.link}>
                    <p className={styles.course}>{course.name} </p>
                </Link>
            ))}
        </div>
    ));

    return (
        <div className={styles.courses_container}>
            <p className={styles.title}>Courses</p>
            <div className={styles.list}>
                {coursesList}
            </div>
        </div>
    );
};

export default memo(CoursesModal);
