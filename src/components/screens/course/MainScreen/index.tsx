import { FC } from 'react';

import MainSlider from '../MainSlider';
import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './style.module.sass';

type MainProps = {
	course: Courses
};

const MainScreen: FC<MainProps> = ({ course }) => {
	return (
		<div id='main-screen' className={styles.screen}>
			<div className={styles.main}>
				<MainSlider course={course}/>
			</div>
		</div>
	);
};

export default MainScreen;
