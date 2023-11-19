import React, { memo } from 'react';
import { NextSeo } from 'next-seo';
import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import CoursePage from '@/components/screens/course';

import { getCourseBySlug } from '../../../sanity/services/courses.service';
import { urlFor } from '../../../sanity/sanity';

type CourseProps = {
    course: any,
    isError: boolean,
}

const Course = ({ course, isError }: CourseProps) => {
    const urlForSeo = urlFor(course.course_main[0].course_section_image)
    .auto('format')
    .fit('max')
    .url();

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
                            url: urlForSeo || '',
                            width: 500,
                            height: 500,
                            alt: course.course_main[0].course_section_image.alt,
                        },
                    ],
                    siteName: 'ART Training Center',
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
};

export default memo(Course);
