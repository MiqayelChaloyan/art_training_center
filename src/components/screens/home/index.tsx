import Layout from '@/components/layout/Layout';
import MainScreen from '@/components/screens/home/MainScreen';
import { HomeContent } from '../../../../sanity/sanity-queries/home-queries';
import { FC, memo } from 'react';
import Head from 'next/head';

import SectionAboutUs from './SectionAboutUs';
import VideoPlayer from './VideoPlayerSection';
import CookingCourses from './CookingCourses';
import Progress from './Progress';
import Specialists from './Specialists';
import OurRating from './OurRating';

type HomePageProps = {
	data: HomeContent[];
	isError: boolean,
}

const Home: FC<HomePageProps> = ({ data, isError }) => {
	return (
		<Layout headerPosition='fixed'>
			<Head>
				<title>ART Training Center</title>
				<meta name='description' content='Training Center' />
			</Head>
			<MainScreen data={data}/>
			<SectionAboutUs data={data}/>
			<VideoPlayer data={data}/>
			<CookingCourses data={data}/>
			<Progress data={data}/>
			<Specialists data={data}/>
			<OurRating data={data}/>
		</Layout>
	);
};

export default memo(Home);