export interface Courses_Names {
    id: string | undefined;
    _id: string;
    name: string;
    publishDate: string;
    _type: string;
    _updatedAt: string;
    slug: { current: string };
}

export const CoursesNamesQuery = `{
    _id,
    name,
    publishDate,
    _type,
    _updatedAt,
    "slug": slug.current,
}`;
