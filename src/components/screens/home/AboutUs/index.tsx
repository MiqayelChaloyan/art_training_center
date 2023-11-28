import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import Container from '@/components/components/Container';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: HomeContent[];
};

const group = {
    ['margin']: '0',
};

const AboutUs: FC<Props> = ({ data }) => {
    const { t } = useTranslation();
    const { about_us_content } = data[0];
    
    return (
        <div id='about-us' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>{t('pages.about')}</h1>
                <div className={styles.about_us}>
                    <div className={styles.about_box}>
                        <p>{about_us_content}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default memo(AboutUs);