import { groq } from 'next-sanity';
import { client } from '../../schemas/client';
import { HomeContent, homeContentQuery } from '../../sanity-queries/home-queries';

export const getHomeData = async (): Promise<HomeContent[]> => {
    const query = groq`*[_type == "home_content"] ${homeContentQuery}`;

    try {
        const data = await client.fetch(query);
        return data;
    } catch (err) {
        throw err;
    }
};