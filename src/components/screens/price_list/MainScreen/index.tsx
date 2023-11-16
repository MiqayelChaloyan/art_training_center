import { FC } from 'react';
import styles from './MainScreen.module.sass';
import { Courses } from '../../../../../sanity/sanity-queries/courses';
import Accordion from '../Accordion';

type MainProps = {
    course: Courses[];
    isError: boolean;
};

const MainScreen: FC<MainProps> = ({ course, isError }) => {
    return (
        <div id='main-screen' className={styles.screen}>
            <div className={styles.main}>
                <p className={styles.title}>Price List</p>
                <div >
                    <Accordion course={course} />
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
