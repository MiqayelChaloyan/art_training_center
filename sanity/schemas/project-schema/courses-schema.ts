import { defineArrayMember } from "sanity";

const styles = [
    { title: 'Normal', value: 'normal' },
    { title: 'H1', value: 'h1' },
    { title: 'H2', value: 'h2' },
    { title: 'H3', value: 'h3' },
    { title: 'H4', value: 'h4' },
    { title: 'Quote', value: 'blockquote' },
    { title: 'Bullet', value: 'bullet' },
    { title: 'Normal', value: 'normal' },
    { title: 'Italic', value: 'italic' },
    { title: 'Code', value: 'code' },
    { title: 'Bullet List', value: 'bullet' },
    { title: 'Numbered List', value: 'number' },
];

export const courses = {
    name: 'courses',
    type: 'document',
    title: 'Courses',
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
            name: 'course_main',
            type: 'array',
            title: 'Main Sections (You can add any number of pictures)*',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        { type: 'string', name: 'subtitle', title: 'Course Section Title' },
                        {
                            name: 'content',
                            type: 'array',
                            title: 'Course Section Content',
                            of: [
                                {
                                    type: 'block',
                                    lists: [
                                        { title: 'Bullet', value: 'bullet' },
                                        { title: 'Numbered', value: 'number' }
                                    ],
                                    styles,
                                    marks: {
                                        annotations: [
                                            {
                                                name: 'internalLink',
                                                type: 'object',
                                                title: 'Internal link',
                                                fields: [
                                                    {
                                                        name: 'href',
                                                        type: 'url',
                                                        validation: (Rule: { uri: (arg0: { allowRelative: boolean; scheme: string[]; }) => any; }) =>
                                                            Rule.uri({
                                                                allowRelative: false,
                                                                scheme: ['http', 'https', 'mailto', 'tel'],
                                                            }),
                                                    },
                                                ]
                                            },
                                            {
                                                name: 'link',
                                                type: 'object',
                                                title: 'Link',
                                                fields: [
                                                    {
                                                        name: 'href',
                                                        type: 'url',
                                                        validation: (Rule: { uri: (arg0: { allowRelative: boolean; scheme: string[]; }) => any; }) =>
                                                            Rule.uri({
                                                                allowRelative: false,
                                                                scheme: ['http', 'https', 'mailto', 'tel'],
                                                            }),
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                },
                            ],
                        },
                        {
                            name: 'course_section_image',
                            title: 'Course Section Image',
                            type: 'image',
                            options: { hotspot: true },
                            fields: [

                                {
                                    name: 'alt',
                                    title: 'Alt',
                                    type: 'string'
                                }
                            ]
                        },
                    ]
                })
            ]
        },
        {
            name: 'about_us_title',
            title: 'About Us Section Title',
            type: 'string',
            validation: (Rule: any) => Rule.max(30).required(),
        },
        {
            name: 'about_us_content',
            type: 'array',
            title: 'About Us Section Content',
            of: [
                {
                    type: 'block',
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' }
                    ],
                    styles,
                    marks: {
                        annotations: [
                            {
                                name: 'internalLink',
                                type: 'object',
                                title: 'Internal link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        validation: (Rule: { uri: (arg0: { allowRelative: boolean; scheme: string[]; }) => any; }) =>
                                            Rule.uri({
                                                allowRelative: false,
                                                scheme: ['http', 'https', 'mailto', 'tel'],
                                            }),
                                    },
                                ]
                            },
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        validation: (Rule: { uri: (arg0: { allowRelative: boolean; scheme: string[]; }) => any; }) =>
                                            Rule.uri({
                                                allowRelative: false,
                                                scheme: ['http', 'https', 'mailto', 'tel'],
                                            }),
                                    },
                                ]
                            }
                        ]
                    }
                },
            ],
        },
        {
            name: 'course_process_video_url',
            title: 'Course Process Section Video Link',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'course_process_video_light',
            title: 'Course Process Section Video Light',
            type: 'image',
            options: { hotspot: true },
            fields: [

                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'student_work_section',
            type: 'array',
            title: 'Student work Images',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        {
                            name: 'images',
                            type: 'array',
                            title: 'Images',
                            of: [
                                {
                                    name: 'image',
                                    type: 'image',
                                    title: 'Image',
                                    options: {
                                        hotspot: true,
                                    },
                                    fields: [
                                        {
                                            name: 'alt',
                                            type: 'string',
                                            title: 'Alternative text',
                                        },
                                    ],
                                },
                            ],
                            options: {
                                layout: 'grid',
                            },
                        },
                    ]
                })
            ]
        },
        {
            name: 'price_list',
            type: 'array',
            title: 'Price list',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        { type: 'string', name: 'title', title: 'Course Title' },
                        {
                            title: 'Course Amount',
                            name: 'amount',
                            type: 'number',
                            initialValue: 0,
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            title: 'Start date',
                            name: 'startDate',
                            type: 'date',
                            options: {
                                dateFormat: 'YYYY-MM-DD',
                                calendarTodayLabel: 'Today'
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            title: 'End date',
                            name: 'endDate',
                            type: 'date',
                            options: {
                                dateFormat: 'YYYY-MM-DD',
                                calendarTodayLabel: 'Today'
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'duration',
                            type: 'number',
                            title: 'Duration of the course',
                            initialValue: 0,
                            validation: (Rule: any) => Rule.required(),
                        },
                    ]
                })
            ],
            validation: (Rule: any) => Rule.required(),
        },
    ],
};

export default courses;



