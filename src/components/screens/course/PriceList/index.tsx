import { FC } from 'react';

import { Inter } from 'next/font/google';

import { useTranslation } from 'react-i18next';

import Container from '@/components/components/Container';

import styles from './style.module.sass';

type PriceListProps = {
    course: any
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

function daysBetweenDates(dateStr1: any, dateStr2: any) {
    const startDate = new Date(dateStr1);
    const endDate = new Date(dateStr2);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference;
};

const PriceList: FC<PriceListProps> = ({ course }) => {
    const { t } = useTranslation();

    const table = course.price_list && course.price_list.map((item: any) => {
        const result = daysBetweenDates(item.startDate, item.endDate);
        return (
            <table key={item.slug} className={styles.price_list_table}>
                <thead>
                    <tr className={styles.list}>
                        <td className={inter.variable}>{item.course_title}</td>
                        <td className={inter.variable}>{item.amount} AMD</td>
                        <td className={inter.variable}>{`${result} ${t('price-list.days')}`}</td>
                        <td className={inter.variable}>{`${item.duration} ${t('price-list.hour')}`}</td>
                    </tr>
                </thead>
            </table>
        );
    });

    return (
        <div id='price-list' className={styles.container}>
            <Container>
                <h1 className={`${styles.title} ${inter.variable}`}>{t('pages.price_list')}</h1>
            </Container>
            <div className={styles.table}>
                {table}
            </div>
        </div>
    );
};

export default PriceList;