import Layout from '@/components/layout/Layout';
import MainScreen from '@/components/screens/home/MainScreen';
import { HomeContent } from '../../../../sanity/sanity-queries/home-queries';
import { FC, memo } from 'react';
import Head from 'next/head';

import AboutUs from './AboutUs';
import VideoPlayer from './VideoPlayer';
import CookingCourses from './CookingCourses';
import Progress from './Progress';
import Specialists from './Specialists';
import OurRating from './OurRating';

type Props = {
	data: HomeContent[];
	isError: boolean,
};

const Home: FC<Props> = ({ data, isError }) => {	
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