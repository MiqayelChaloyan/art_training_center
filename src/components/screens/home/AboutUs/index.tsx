import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import Container from '@/components/components/Container';

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

const AboutUs: FC<Props> = ({ data }) => {
    const { t } = useTranslation();
    const { about_us_content } = data[0];
    const content = about_us_content.length <= 1000 ? about_us_content : about_us_content.slice(0, 1000) + '...';
    
    return (
        <div id='about-us' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={`${styles.title} ${inter.variable}`}>{t('pages.about')}</h1>
                <div className={styles.about_us}>
                    <div className={styles.about_box}>
                        <p className={inter.variable}>{content}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default memo(AboutUs);