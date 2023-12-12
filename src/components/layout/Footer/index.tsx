import React, { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { useTranslation } from 'react-i18next';

import useWindowSize from '@/hooks/useWindowSize';

import FormAppointment from '@/components/forms/FormAppointment';
import HeaderForm from '@/components/ui/HeaderForm/HeaderForm';
import Map from '@/components/ui/Map';

import Email from '@/components/icons/Email';
import Phone from '@/components/icons/Phone';

import logo from '../../../../public/images/Mask.png';
import { Courses } from '../../../../sanity/sanity-queries/courses';

import styles from './Footer.module.sass';


type Props = {
    courses: Courses[]
};

const group = {
    ['margin']: '0 auto'
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const Footer: FC<Props> = ({ courses }) => {
    const size = useWindowSize();
    const { t } = useTranslation();

    if (!courses.length) {
        return null;
    };

    const matrix = courses.reduce((acc: any, item: any, index: number) => {
        const rowIndex = Math.floor(index / 6);
        if (!acc[rowIndex]) {
            acc[rowIndex] = [];
        }
        acc[rowIndex].push(item);
        return acc;
    }, []);

    const links = matrix.map((row: any, rowIndex: string) => (
        <div key={rowIndex} className={styles.row}>
            {
                row.map((course: any) => (
                    <Link key={course.slug} href={`/courses/${course.slug}`} aria-label={course.course_name} className={styles.link}>
                        <p className={`${styles.copyright} ${inter.variable}`}>{course.course_name}</p>
                    </Link>
                ))
            }
        </div>
    ));

    return (
        <footer id='footer' className={styles.footer}>
            <div>
                <div id='contact' className={styles.box}>
                    <div className={styles.contact}>
                        <FormAppointment width='30%'>
                            <HeaderForm display='grid' color='white' justifyContent='center' title={t('contact-us.title')} fontSize={size.width >= 767 ? '35px' : '20px'} fill='white' group={group} />
                        </FormAppointment>
                    </div>
                </div>
                <div className={styles.google_map}>
                    <Map width='100%' height='100%' />
                    <p className={`${styles.address} ${inter.variable}`}>{t('adress.adress')}</p>
                </div>
                <div className={styles.links}>
                    <div className={styles.courses_links}>
                        {links}
                    </div>
                    <div className={styles.contain}>
                        <Image
                            className={styles.art_center_logo}
                            src={logo}
                            alt="Footer Logo"
                            priority
                            width={0}
                            height={0}
                            style={{
                                width: '24%', height: 'auto', objectFit: 'scale-down', margin: '0 auto', marginRight: 0
                            }}
                        />
                        <Link href='tel:+37477111111' aria-label='Phone' className={styles.icon}>
                            <Phone
                                width='20'
                                height='20'
                                fill='white'
                            />
                            <p className={`${styles.info_web} ${inter.variable}`}>{t('contact.tell')} +374 77 11 11 11</p>
                        </Link>
                        <Link href='mailto:art.house@bk.ru' aria-label='Email' className={styles.icon}>
                            <Email
                                width='20'
                                height='20'
                                fill='white'
                            />
                            <p className={`${styles.info_web} ${inter.variable}`}>{t('contact.email')} art.house@bk.ru</p>
                        </Link>
                        <p className={`${styles.info_web} ${inter.variable}`}>{t('adress.street')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;