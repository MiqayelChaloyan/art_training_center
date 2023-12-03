import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Inter } from 'next/font/google';

import Accordion from '../Accordion';
import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './MainScreen.module.sass';

type MainProps = {
    course: Courses[]
    isError: boolean
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const MainScreen: FC<MainProps> = ({ course, isError }) => {
    const { t } = useTranslation();

    return (
        <div id='main-screen' className={styles.screen}>
            <div className={styles.main}>
                <p className={`${styles.title} ${inter.variable}`}>{t('pages.price_list')}</p>
                <div >
                    <Accordion course={course} />
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
