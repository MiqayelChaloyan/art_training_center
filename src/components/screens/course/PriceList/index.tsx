import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import Container from '@/components/components/Container';

import styles from './style.module.sass';

type PriceListProps = {
    course: any;
}

function daysBetweenDates(dateStr1: any, dateStr2: any) {
    const startDate = new Date(dateStr1);
    const endDate = new Date(dateStr2);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference;
}

const PriceList: FC<PriceListProps> = ({ course }) => {
    const { t } = useTranslation();

    const table = course.price_list && course.price_list.map((item: any) => {
        const result = daysBetweenDates(item.startDate, item.endDate);
        return (
            <table key={item.slug}>
                <thead>
                    <tr>
                        <td>{item.course_title}</td>
                        <td>{item.amount} AMD</td>
                        <td>{`${result} ${t('price-list.days')}`}</td>
                        <td>{`${item.duration} ${t('price-list.hour')}`}</td>
                    </tr>
                </thead>
            </table>
        );
    });

    return (
        <div id='price-list' className={styles.container}>
            <Container>
                <h1 className={styles.title}>{t('pages.price_list')}</h1>
            </Container>
            <div className={styles.table}>
                {table}
            </div>
        </div>
    );
};

export default PriceList;