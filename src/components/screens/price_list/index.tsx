import { FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import Layout from '@/components/layout/Layout';
import MainScreen from './MainScreen';

import { Courses } from '../../../../sanity/sanity-queries/courses';

type PriceListProps = {
	course: Courses[]
	isError: boolean
}

const PriceList: FC<PriceListProps> = ({ course, isError }) => {	
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(closeModal());
	}, []);

	return (
		<Layout headerPosition='fixed'>
			<MainScreen course={course} isError={isError}/>
		</Layout>
	);
};

export default PriceList;











