import { FC, memo, useState } from 'react';

import Course from '../Course';

import { urlFor } from '../../../../../../sanity/sanity';

type Props = {
    data: any;
};

const concatenateTextWithFilter = (arg: any) => {
    return arg.reduce((text: string, item: any) => {
        if (item.text) {
            text += item.text;
        }
        return text;
    }, '');
};

const Courses: FC<Props> = ({ data }) => {
    const [isReadMore, setIsReadMore] = useState<boolean>(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const scrollToElement = () => {
        const container: HTMLElement | null = document.getElementById('contact');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        data.map((item: any, index: number): JSX.Element => {
            const urlForImageOne = urlFor(item.news_image_one)
                .auto('format')
                .fit('max')
                .url();

            const urlForImageTwo = urlFor(item.news_image_two)
                .auto('format')
                .fit('max')
                .url();

            const result = concatenateTextWithFilter(item.content[0].children);

            const course = {
                subtitle: item.subtitle,
                urlForImageOne,
                urlForImageTwo,
                result,
                scrollToElement,
                toggleReadMore,
                altOne: item.news_image_one.alt,
                altTwo: item.news_image_two.alt,
                isReadMore
            };

            return (
                <Course  {...course} key={item.subtitle} />
            );
        }
        ));
};

export default memo(Courses);