import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import Container from '@/components/components/Container';
import Courses from './Courses';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import { Inter } from 'next/font/google';

import styles from './style.module.sass';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

type Props = {
    data: HomeContent[]
};

const CookingCourses: FC<Props> = ({ data }) => {
    const { t } = useTranslation();

    if (!data[0].news_section) {
        return null;
    };

    return (
        <div id='cooking-courses' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={`${styles.title} ${inter.variable}`}>{t('pages.news')}</h1>
                <div className={styles.cooking_courses}>
                    <Courses data={data[0].news_section} />
                </div>
            </Container>
        </div>
    );
};

export default memo(CookingCourses);