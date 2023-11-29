import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import FormAppointment from '@/components/forms/FormAppointment';
import HeaderForm from '@/components/ui/HeaderForm/HeaderForm';
import Container from '@/components/components/Container';

import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './style.module.sass';

type Props = {
    course: Courses[];
};

const group = {
    ['margin']: '0',
};

const AboutUs: FC<Props> = ({ course }) => {
    const { about_us_content } = course as any;    
    const { t } = useTranslation();

    return (
        <div id='about-us' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>{t('pages.about_courses')}</h1>
                <div className={styles.about_us}>
                    <div className={styles.about_box}>
                        <p>{about_us_content}</p>
                    </div>
                    <div className={styles.form_box}>
                        <FormAppointment width='30%'>
                            <HeaderForm
                                display='flex'
                                color='black'
                                justifyContent='space-around'
                                title={t('contact-us.title')}
                                fill='#111111'
                                fontSize='28px'
                                group={group}
                            />
                        </FormAppointment>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default memo(AboutUs);