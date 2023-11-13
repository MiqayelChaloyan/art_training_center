import React, { memo, useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/layout/Layout';
import { NextSeo } from 'next-seo';
import CoursePage from '@/components/screens/course';
import { getCourseBySlug } from '../../../sanity/services/courses.service';
import { Courses } from '../../../sanity/sanity-queries/courses';
import { generateImageUrl } from '@/utils/imageGenerate';

type CourseProps = {
    course: any,
    isError: boolean,
}

const Course = ({ course, isError }: CourseProps) => {
    const image = generateImageUrl(course.course_main[0].course_section_image.asset._ref);

    return (
        <Layout  headerPosition='fixed'>
            <NextSeo
                title={course.subtitle}
                description={course.about_us_content[0].children[0].text}
                canonical='https://art-training-center.vercel.app/'
                openGraph={{
                    url: `https://art-training-center.vercel.app/course/${course.slug}`,
                    title: course.subtitle,
                    description: course.about_us_content[0].children[0].text,
                    images: [
                        {
                            url: image || '',
                            width: 500,
                            height: 500,
                            alt: course.course_main[0].course_section_image.alt,
                        },
                    ],
                    siteName: 'ART | HOUSE',
                    type: 'website',
                    locale: 'en'
                }}
            />
            <CoursePage course={course} isError={isError}/>
        </Layout>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const { slug } = context.query;
        const course = await getCourseBySlug(slug as string);

        return {
            props: {
                course,
                isError: false,
            },
        };
    } catch (error) {
        return {
            props: {
                course: {},
                isError: true,
            },
        };
    }
}

export default memo(Course);
