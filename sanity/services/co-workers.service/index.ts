import { groq } from 'next-sanity';
import { client } from '../../schemas/client';
import { CoWorkersQuery, Co_workers } from '../../sanity-queries/co-workers';

export const getCoWorkers = async (): Promise<Co_workers[]> => {
    const query = groq`*[_type == "co_workers"] ${CoWorkersQuery}`;

    try {
        const data = await client.fetch(query);
        return data;
    } catch (err) {
        throw err;
    }
};