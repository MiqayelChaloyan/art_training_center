import { memo } from 'react';
import RatingCard from '../RatingCard';
import { urlFor } from '../../../../../../sanity/sanity';

const concatenateTextWithFilter = (arg: any) => {
    return arg.reduce((text: string, item: any) => {
        if (item.text) {
            text += item.text;
        }
        return text;
    }, '');
};

const sizes = [
    {
        top: 70,
        left: 10,
        bottom: 20
    },
    {
        top: 30,
        left: 20,
        bottom: 50
    },
    {
        top: 80,
        left: 10,
        bottom: 5
    }
];

const Rating = ({ data }: any) => data.map((card: any, index: number): JSX.Element => {
    const result = concatenateTextWithFilter(card?.user_feedback[0].children);

    const urlForImageBackground = urlFor(card.our_rating_section_image)
    .auto('format')
    .fit('max')
    .url();

    const urlForImage = urlFor(card.user_image)
    .auto('format')
    .fit('max')
    .url();

    const urlImageAlt = card.user_image.alt;
    const name = card.user_name;

    const options = {
        name,
        urlForImageBackground,
        urlForImage,
        urlImageAlt,
        result,
        rating: card.rating + 1,
        ...sizes[index],
    };

    return <RatingCard key={card._key} options={options} />;
});

export default memo(Rating);