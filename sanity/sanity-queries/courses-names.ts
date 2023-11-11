export interface Courses_Names {
    id: string | undefined;
    _id: string;
    name: string;
    _type: string;
    _updatedAt: string;
    slug: { current: string };
}

export const CoursesNamesQuery = `{
    _id,
    name,
    _type,
    _updatedAt,
    "slug": slug.current,
}`;
