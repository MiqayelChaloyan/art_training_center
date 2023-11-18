import { FC, memo } from 'react';

import Container from '@/components/components/Container';
import Courses from './Courses';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: HomeContent[];
};

const CookingCourses: FC<Props> = ({ data }) => {

    if (!data[0].news_section) {
        return null;
    };

    return (
        <div id='cooking-courses' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>News</h1>
                <div className={styles.cooking_courses}>
                    <Courses data={data[0].news_section} />
                </div>
            </Container>
        </div>
    );
};

export default memo(CookingCourses);