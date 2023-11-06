// import { defineArrayMember } from 'sanity';

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
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
            validation: (Rule: any) => Rule.max(30).required(),
        },
        {
            name: 'mainDescription',
            title: 'Main Description',
            type: 'string',
            validation: (Rule: any) => Rule.max(70).required(),
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                    validation: (Rule: any) => Rule.required(),
                },
            ],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'aboutUsTitle',
            title: 'About Us Section Title',
            type: 'string',
            validation: (Rule: any) => Rule.max(30).required(),
        },
        {
            name: 'aboutUsContent',
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
    ]
};

export default home_content;