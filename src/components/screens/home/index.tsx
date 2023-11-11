import Layout from '@/components/layout/Layout';
import MainScreen from '@/components/screens/home/MainScreen';
import { HomeContent } from '../../../../sanity/sanity-queries/home-queries';
import { FC, memo } from 'react';
import Head from 'next/head';

import SectionAboutUs from './SectionAboutUs';
import SectionCourses from './SectionCourses';
import CookingCourses from './CookingCourses';
import CircleProgress from './CircleProgress';
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
			<SectionCourses data={data}/>
			<CookingCourses data={data}/>
			<CircleProgress/>
			<Specialists data={data}/>
			<OurRating/>
		</Layout>
	);
};

export default memo(Home);