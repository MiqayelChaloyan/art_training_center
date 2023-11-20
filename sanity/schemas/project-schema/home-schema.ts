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

export const home_content = {
    name: 'home_content',
    type: 'document',
    title: 'Home Content',
    fields: [
        {
            name: 'main_section',
            type: 'array',
            title: 'Main Sections (You can add any number of pictures)*',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        { type: 'string', name: 'subtitle', title: 'Main Section Title' },
                        {
                            name: 'content',
                            type: 'array',
                            title: 'Main Section Content',
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
                            name: 'main_section_image',
                            title: 'Main Section Image',
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
            name: 'cooking_courses_video_url',
            title: 'Cooking Courses Section Video Link',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'cooking_courses_video_light',
            title: 'Cooking Courses Section Video Light',
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
            name: 'news_section',
            type: 'array',
            title: 'News Sections (No less than three, and no more, only you can modify them)*',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        { type: 'string', name: 'subtitle', title: 'News Section Title' },
                        {
                            name: 'content',
                            type: 'array',
                            title: 'News Section Content',
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
                            name: 'news_image_one',
                            title: 'News Section Image 1',
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
                        {
                            name: 'news_image_two',
                            title: 'News Section Image 2',
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
            name: 'progress_section',
            type: 'array',
            title: 'Progress sections (no less than four and no more, only you can modify them)*',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        { type: 'string', name: 'title', title: 'News Section Title' },
                        {
                            title: 'Quantity',
                            name: 'quantity',
                            type: 'number',
                            initialValue: 0,
                            validation: (Rule: any) => Rule.required(),
                        },
                    ]
                })
            ]
        },
        {
            name: 'specialists_section',
            type: 'array',
            title: 'Specialists Sections',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        { type: 'string', name: 'subtitle', title: 'Specialists Section Title' },
                        { type: 'string', name: 'course', title: 'Course Name' },
                        {
                            name: 'specialists_section_image',
                            title: 'Specialists Section Image',
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
                        {
                            name: 'categories',
                            type: 'reference',
                            title: 'Course Category',
                            to: [{ type: 'courses' }],
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'specialists_section_images',
                            type: 'array',
                            title: 'Specialists Sections Images',
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
                        }
                    ]
                })
            ],
        },
        {
            name: 'our_rating_section',
            type: 'array',
            title: 'Our Rating Sections (No less than three, and no more, only you can modify them)*',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        {
                            name: 'our_rating_section_image',
                            title: 'Our Rating Section Background Image',
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
                        { type: 'string', name: 'user_name', title: 'User Name' },
                        {
                            title: 'Rating (1-5)*',
                            name: 'rating',
                            type: 'number',
                            validation: (Rule) => Rule.min(1).max(10).required(),
                            initialValue: 5,
                        },
                        {
                            name: 'user_image',
                            title: 'User Image',
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
                        {
                            name: 'user_feedback',
                            type: 'array',
                            title: 'User Feedback',
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
                        }
                    ]
                })
            ]
        }
    ]
};

export default home_content;