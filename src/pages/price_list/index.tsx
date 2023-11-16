import PriceList from '@/components/screens/price_list';
import { FC } from 'react';
import { Co_workers } from '../../../sanity/sanity-queries/co-workers';
import { getCourses } from '../../../sanity/services/courses.service';
import { Courses } from '../../../sanity/sanity-queries/courses';

type PriceListProps = {
	course: Courses[]
	isError: boolean
}

const PriceListPage: FC<PriceListProps> = ({ course, isError }) => {
	return (<PriceList course={course} isError={isError}/>);
};

export async function getServerSideProps() {
    try {
        const course = await getCourses();

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