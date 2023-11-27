import { groq } from 'next-sanity';
import { client } from '../../schemas/client';
import { Co_workers } from '../../sanity-queries/co-workers';

export const getCoWorkers = async (language: string): Promise<Co_workers[]> => {
    const query = groq`*[_type == "co_workers"] {
        "company_name": company_name[$language],
        "cooperation": cooperation[$language],
        "implemented_projects": implemented_projects[$language],
        "_id": _id,
        "slug": slug.current,
        "logo": logo
    }`;

    try {
        const data = await client.fetch(query, { language });
        return data;
    } catch (err) {
        throw err;
    }
};