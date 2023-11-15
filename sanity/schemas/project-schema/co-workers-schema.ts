const co_workers = {
    name: 'co_workers',
    type: 'document',
    title: 'Co-workers',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: (Rule: any) => Rule.max(200),
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
            name: 'co_workers_image',
            title: 'Co-workers image',
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
    ]
};

export default co_workers;
