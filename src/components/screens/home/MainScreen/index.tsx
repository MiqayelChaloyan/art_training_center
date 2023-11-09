import { FC } from 'react';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import SimpleSlider from '../Slider';
import styles from './MainScreen.module.sass';


type MainProps = {
	data: HomeContent[];
}

const MainScreen: FC<MainProps> = ({ data }) => {
	return (
		<div id='main-screen' className={styles.screen}>
			<div className={styles.main}>
				<SimpleSlider data={data}/>
			</div>
		</div>
	);
};

export default MainScreen;
