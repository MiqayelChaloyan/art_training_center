import Layout from '@/components/layout/Layout';
import { Courses } from '../../../../sanity/sanity-queries/courses';
import { FC } from 'react';
import MainScreen from './MainScreen';

type PriceListProps = {
	course: Courses[]
	isError: boolean
}

const PriceList: FC<PriceListProps> = ({ course, isError }) => {
	return (
		<Layout headerPosition='fixed'>
			<MainScreen course={course} isError={isError}/>
		</Layout>
	);
};

export default PriceList;











