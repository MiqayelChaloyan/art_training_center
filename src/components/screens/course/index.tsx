import Layout from '@/components/layout/Layout';
import MainScreen from '@/components/screens/course/MainScreen';
import { FC, memo, useEffect, useState } from 'react';
import Head from 'next/head';
import { Courses } from '../../../../sanity/sanity-queries/courses';
import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import SectionAboutUs from './SectionAboutUs';
import CourseProcess from './CourseProcess';
import StudentWork from './StudentWork';
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
            <SectionAboutUs course={course} />
            <CourseProcess course={course} />
            <StudentWork course={course} />
            <PriceList course={course} />
        </div>
    );
};

export default memo(CoursePage);