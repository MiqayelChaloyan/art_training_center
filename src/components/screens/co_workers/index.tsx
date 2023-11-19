import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import MainScreen from './MainScreen';

import { Co_workers } from '../../../../sanity/sanity-queries/co-workers';

type CoWorkersProps = {
	data: Co_workers[]
	isError: boolean
}

const CoWorkers: FC<CoWorkersProps> = ({ data, isError }) => {
	return (
		<Layout headerPosition='fixed'>
			<MainScreen data={data} isError={isError}/>
		</Layout>
	);
};

export default CoWorkers;