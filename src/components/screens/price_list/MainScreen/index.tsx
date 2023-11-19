import { FC } from 'react';

import Accordion from '../Accordion';
import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './MainScreen.module.sass';

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
