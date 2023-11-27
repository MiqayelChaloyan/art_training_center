import { FC } from 'react';

import PriceList from '@/components/screens/price_list';

import { getCourses } from '../../../sanity/services/courses.service';
import { Courses } from '../../../sanity/sanity-queries/courses';

type PriceListProps = {
    course: Courses[]
    isError: boolean
}

const PriceListPage: FC<PriceListProps> = ({ course, isError }) => {
    
    if (isError) {
        return <div>Error loading data</div>;
    }

    return (<PriceList course={course} isError={isError} />);
};

export async function getServerSideProps(context: any) {
    const { locale } = context;

    try {
        const course = await getCourses(locale);

        return {
            props: {
                course,
                isError: false,
            },
        };
    } catch (error) {
        return {
            props: {
                course: {},
                isError: true,
            },
        };
    }
}

export default PriceListPage;