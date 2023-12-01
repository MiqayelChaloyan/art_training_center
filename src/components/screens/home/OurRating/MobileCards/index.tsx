import RatingCard from '../RatingCard';

import { urlFor } from '../../../../../../sanity/sanity';

const MobileCards = (data: any) => {
    const feedbacks = data.map((card: any): JSX.Element => {

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
        };

        return <RatingCard key={card.slug} options={options} />;
    });

    return feedbacks;
};

export default MobileCards;