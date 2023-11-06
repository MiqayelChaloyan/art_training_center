export const courses_names = {
    name: 'courses_names',
    type: 'document',
    title: 'Courses Names',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: (Rule: any) => Rule.max(50),
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Publish Date',
            name: 'publishDate',
            type: 'date',
            validation: (Rule: any) => Rule.required(),
        },
    ],
};

export default courses_names;



