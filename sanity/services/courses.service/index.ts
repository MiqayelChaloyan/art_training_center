import { groq } from 'next-sanity';
import { client } from '../../schemas/client';
import { Courses, CoursesQuery } from '../../sanity-queries/courses';

export const getCourses = async (): Promise<Courses[]> => {
    const query = groq`*[_type == "courses"] ${CoursesQuery}`;

    try {
        const data = await client.fetch(query);
        return data;
    } catch (err) {
        throw err;
    }
};

export const getCourseBySlug = async (slug: string): Promise<Courses> => {
    const query = groq`*[_type == "courses" && slug.current == $slug][0]${CoursesQuery}`;

    try {
        const data =  await client.fetch(query, { slug });
        return data;

    } catch (err) {
        throw err;
    }
};

export const getCourseById = async (_id: string): Promise<Courses> => {
    const query = groq`*[_type == "courses" && _id == $_id][0]${CoursesQuery}`;

    try {
        const data = await client.fetch(query, { _id });
        return data;

    } catch (err) {
        throw err;
    }
};