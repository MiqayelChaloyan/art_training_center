import { FC, memo } from 'react';

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

    const scrollToElement = () => {
        const container: HTMLElement | null = document.getElementById('contact');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        data.map((item: any): JSX.Element => {
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
                altOne: item.news_image_one.alt,
                altTwo: item.news_image_two.alt,
            };

            return (
                <Course  {...course} key={item._key} />
            );
        }
        ));
};

export default memo(Courses);