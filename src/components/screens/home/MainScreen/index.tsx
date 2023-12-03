import { FC } from 'react';

import MainSlider from '../MainSlider';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type MainProps = {
	data: HomeContent[]
};

const MainScreen: FC<MainProps> = ({ data }) => {
	return (
		<div id='main-screen' className={styles.screen}>
			<div className={styles.main}>
				<MainSlider data={data} />
			</div>
		</div>
	);
};

export default MainScreen;
