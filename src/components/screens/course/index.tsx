import { FC, memo, useEffect } from 'react';

import MainScreen from '@/components/screens/course/MainScreen';
import AboutUs from './AboutUs';
import VideoPlayer from './CourseProcess';
import StudentWork from './StudentWork';

import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import PriceList from './PriceList';

type CoursePageProps = {
    course: any;
    isError: boolean,
}

const CoursePage: FC<CoursePageProps> = ({ course, isError }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => dispatch(closeModal()), 1);
    }, [course]);

    return (
        <div>
            <MainScreen course={course} />
            <AboutUs course={course}/>
            <VideoPlayer course={course} />
            <StudentWork course={course} />
            <PriceList course={course} />
        </div>
    );
};

export default memo(CoursePage);