import { groq } from 'next-sanity';
import { client } from '../../schemas/client';
import { CoursesNamesQuery, Courses_Names } from '../../sanity-queries/courses-names';

export const getCoursesNames = async (): Promise<Courses_Names[]> => {
    const query = groq`*[_type == "courses_names"] ${CoursesNamesQuery}`;

    try {
        const data = client.fetch(query);
        return data;
    } catch (err) {
        throw err;
    }
};