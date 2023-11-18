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

    const top =  30 + (index * 25);
    const bottom = 10 + (index * 10);
    const left = index * 20;

    const options = {
        name,
        urlForImageBackground,
        urlForImage,
        urlImageAlt,
        result,
        top,
        bottom,
        left,
        rating: 5,
    };

    return <RatingCard key={card._key} options={options} />;
});

export default memo(Rating);