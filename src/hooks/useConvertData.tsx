import { useMemo } from 'react';
// import { formatUpdatedAt } from '@/utils/formatDate';
import { generateImageUrl } from '@/utils/imageGenerate';
import { HomeContent } from '../../sanity/sanity-queries/home-queries';
// import { Articles } from '../../sanity/sanity-queries';

function useConvertData(data: any) {
    const slideImgUrl = useMemo(() => generateImageUrl(data.asset._ref) || '', [data]);
    // const alt = data.mainImage.alt || '';
    return {
        slideImgUrl,
        // alt,
    };
}

export default useConvertData;