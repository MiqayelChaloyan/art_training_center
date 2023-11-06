import { useMemo } from 'react';
// import { formatUpdatedAt } from '@/utils/formatDate';
import { generateImageUrl } from '@/utils/imageGenerate';
import { HomeContent } from '../../sanity/sanity-queries/home-queries';
// import { Articles } from '../../sanity/sanity-queries';

function useConvertData(data: any) {
    // const { formatted, difference } = formatUpdatedAt(article?._updatedAt);
    // const authorImage = generateImageUrl(article?.authorImage.asset._ref) || '';
    // const subtitle = useMemo(() => data?.articleTitle, [data?.articleTitle]);
    // const readingDuration = useMemo(() => article?.readingDuration + ' mins', [data?.readingDuration]);
    // const descriptionText = useMemo(
    //     () => data?.content[0].children.map((child: { text: any; }) => child.text),
    //     [article?.content]
    // );
    // const pathName = useMemo(() => (path ? `${path}${article?.slug}` : `${article?.slug}`), [
    //     path,
    //     article?.slug,
    // ]);
    const slideImgUrl = useMemo(() => generateImageUrl(data.mainImage.asset._ref) || '', [data]);
    const alt = data.mainImage.alt || '';
// console.log(data)
    return {
        // formatted,
        // difference,
        // mainImage,
        // subtitle,
        // descriptionText,
        // pathName,
        slideImgUrl,
        alt,
        // readingDuration
    };
}

export default useConvertData;