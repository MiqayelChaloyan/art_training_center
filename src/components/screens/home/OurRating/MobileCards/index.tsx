import RatingCard from '../RatingCard';
import { urlFor } from '../../../../../../sanity/sanity';
import { FC } from 'react';

const concatenateTextWithFilter = (arg: any) => {
    return arg.reduce((text: string, item: any) => {
        if (item.text) {
            text += item.text;
        }
        return text;
    }, '');
};

const MobileCards = (data: any) => {
    const feedbacks = data.map((card: any): JSX.Element => {
        const result = concatenateTextWithFilter(card?.user_feedback[0].children);

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
            result,
            rating: card.rating + 1,
        };

        return <RatingCard key={card._key} options={options} />;
    });

    return feedbacks;
};

export default MobileCards;