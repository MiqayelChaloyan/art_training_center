import { FC } from 'react';
import SimpleSlider from '../Slider';
import styles from './MainScreen.module.sass';
import { Courses } from '../../../../../sanity/sanity-queries/courses';


type MainProps = {
	course: Courses;
}

const MainScreen: FC<MainProps> = ({ course }) => {
	return (
		<div id='main-screen' className={styles.screen}>
			<div className={styles.main}>
				<SimpleSlider course={course}/>
			</div>
		</div>
	);
};

export default MainScreen;
