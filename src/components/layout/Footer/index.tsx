import React, { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';

import FormAppointment from '@/components/forms/FormAppointment';
import HeaderForm from '@/components/ui/HeaderForm/HeaderForm';
import Map from '@/components/ui/Map';

import logo from '../../../../public/images/Mask.png';
import { Courses } from '../../../../sanity/sanity-queries/courses';

import styles from './Footer.module.sass';

const group = {
    ['margin']: '0 auto'
};

type Props = {
    courses: Courses[]
}

const Footer: FC<Props> = ({ courses }) => {    
    const { t, i18n } = useTranslation();

    if (!courses.length) {
        return null;
    };

    const matrix = courses.reduce((acc: any, item: any, index: number) => {
        const rowIndex = Math.floor(index / 4);
        if (!acc[rowIndex]) {
            acc[rowIndex] = [];
        }
        acc[rowIndex].push(item);
        return acc;
    }, []);

    const links = matrix.slice(0, 4).map((row: any, rowIndex: number) => (
        <div key={rowIndex} className={styles.row}>
            {row.map((course: any) => (
                <div className={styles.contain} key={course.slug}>
                    <Link href={`${i18n.language}/courses/${course.slug}`} aria-label={`/courses/${course.slug}`} className={styles.icon}>
                        <p className={styles.copyright}>{course.course_name}</p>
                    </Link>
                </div>
            ))}
        </div>
    ));

    return (
        <footer id='footer' className={styles.footer}>
            <div>
                <div id='contact' className={styles.box}>
                    <div className={styles.contact}>
                    <FormAppointment width='30%'>
                        <HeaderForm display='grid' color='white' justifyContent='center' title={t('contact-us.title')} fontSize='40px' fill='white' group={group} />
                    </FormAppointment>
                    </div>
                </div>
                <div className={styles.google_map}>
                    <Map width='100%' height='100%' />
                    <p className={styles.address}>{t('adress.adress')}</p>
                </div>
                <div className={styles.links}>
                    {links}
                    <div className={styles.contain}>
                        <Image
                            src={logo}
                            alt="Footer Logo"
                            priority
                            width={0}
                            height={0}
                            style={{
                                width: '30%', height: 'auto', objectFit: 'scale-down', margin: '0 auto', marginRight: 0
                            }}
                        />
                        <Link href='tel:+37477111111' aria-label='/tel:+37477111111' className={styles.icon}>
                            <p className={styles.info_web}>tell. +374 77 11 11 11</p>
                        </Link>
                        <Link href='mailto:art.house@bk.ru' aria-label='/mailto:art.house@bk.ru' className={styles.icon}>
                            <p className={styles.info_web}>Email art.house@bk.ru</p>
                        </Link>
                        <p className={styles.info_web}>{t('adress.street')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;