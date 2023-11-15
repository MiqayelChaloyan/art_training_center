export interface Co_workers {
    id: string | undefined;
    _id: string;
    name: string;
    co_workers_image: string;
    slug: { current: string };
}

export const CoWorkersQuery = `{
    _id,
    name,
    co_workers_image,
    "slug": slug.current,
}`;
