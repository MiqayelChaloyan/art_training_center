
import { FC } from 'react';
import FormAppointment from '@/components/forms/FormAppointment';
import components from '@/utils/PortableTextComponents';
import { PortableText } from '@portabletext/react';
import HeaderForm from '@/components/ui/HeaderForm/HeaderForm';
import styles from './PriceList.module.sass';

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

    const table = course.price_list && course.price_list.map((item: any) => {
        const result = daysBetweenDates(item.startDate, item.endDate);
        return (
            <table key={item._key}>
                <thead>
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.amount} AMD</td>
                        <td>{result} days</td>
                        <td>{item.duration} hour</td>
                    </tr>
                </thead>
            </table>
        );
    });

    return (
        <div id='about-us' className={styles.about_us}>
            <h1 className={styles.title}>Price List</h1>
            <div className={styles.table}>
                {table}
            </div>
        </div>
    );
};

export default PriceList;