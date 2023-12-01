import { FC, memo, useEffect } from 'react';

import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import MainScreen from '@/components/screens/home/MainScreen';

import AboutUs from './AboutUs';
import VideoPlayer from './VideoPlayer';
import CookingCourses from './CookingCourses';
import Progress from './Progress';
import Specialists from './Specialists';
import OurRating from './OurRating';

import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import { HomeContent } from '../../../../sanity/sanity-queries/home-queries';

type Props = {
	data: HomeContent[];
	isError: boolean,
};

const Home: FC<Props> = ({ data, isError }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(closeModal());
	}, []);

	return (
		<Layout headerPosition='fixed'>
			<Head>
				<title>ART Training Center</title>
				<meta name='description' content='Training Center' />
			</Head>
			<MainScreen data={data}/>
			<AboutUs data={data}/>
			<VideoPlayer data={data}/>
			<CookingCourses data={data}/>
			<Progress data={data}/>
			<Specialists data={data}/>
			<OurRating data={data}/>
		</Layout>
	);
};

export default memo(Home);