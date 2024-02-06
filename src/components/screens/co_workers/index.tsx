import { FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import Layout from '@/components/layout/Layout';
import MainScreen from './MainScreen';

import { Co_workers } from '../../../../sanity/sanity-queries/co-workers';

type CoWorkersProps = {
	data: Co_workers[]
	isError: boolean
};

const CoWorkers: FC<CoWorkersProps> = ({ data, isError }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(closeModal());
	}, []);

	return (
		<Layout headerPosition='fixed'>
			<MainScreen data={data} isError={isError}/>
		</Layout>
	);
};

export default CoWorkers;