import { memo } from 'react';
import RatingCard from '../RatingCard';
import { urlFor } from '../../../../../../sanity/sanity';

// const concatenateTextWithFilter = (arg: any) => {
//     return arg.reduce((text: string, item: any) => {
//         if (item.text) {
//             text += item.text;
//         }
//         return text;
//     }, '');
// };

const sizes = [
    {
        top: 60,
        left: 20,
        bottom: 20
    },
    {
        top: 30,
        left: 25,
        bottom: 50
    },
    {
        top: 80,
        left: 20,
        bottom: 5
    }
];

const Rating = ({ data }: any) => data.map((card: any, index: number): JSX.Element => {
    // const result = concatenateTextWithFilter(card?.user_feedback[0].children);

    const urlForImageBackground = urlFor(card.our_rating_section_image)
    .auto('format')
    .fit('max')
    .url();

    const urlForImage = urlFor(card.user_image)
    .auto('format')
    .fit('max')
    .url();

    const urlImageBackgroundAlt = card.our_rating_section_image.alt;
    const urlImageAlt = card.user_image.alt;
    const name = card.user_name;

    const options = {
        name,
        urlForImageBackground,
        urlImageBackgroundAlt,
        urlForImage,
        urlImageAlt,
        result: card?.user_feedback,
        rating: card.rating + 1,
        ...sizes[index],
    };

    return <RatingCard key={card._key} options={options} />;
});

export default memo(Rating);