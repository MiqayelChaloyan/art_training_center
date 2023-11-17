import { FC, useState } from 'react';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import components from '@/utils/PortableTextComponents';
import { PortableText } from '@portabletext/react';

import { generateImageUrl } from '@/utils/imageGenerate';

import styles from './CookingCourses.module.sass';
import Button from '@/components/ui/Button';

import Content from '../../../ui/ReadMore';

type SectionCoursesProps = {
    data: HomeContent[];
};

const concatenateTextWithFilter = (arg: any) => {
    return arg.reduce((text: string, item: any) => {
        if (item.text) {
            text += item.text;
        }
        return text;
    }, '');
};

const Course = (data: any[]) => {
	const [isReadMore, setIsReadMore] = useState(true);

	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

    const scrollToElement = (id: string) => {
        const container: HTMLElement | null = document.getElementById(id);
        if(container) {
            container.scrollIntoView({  behavior: 'smooth', block: 'start'});
        }
    };

    return (
        data.map(item => {
            const result = concatenateTextWithFilter(item.content[0].children);
            return (
                <div key={item.subtitle} className={styles.course}>
                    <div className={styles.content}>
                        <h3 style={{ fontFamily: 'sans-serif' }}>{item.subtitle}</h3>
                        <Content content={result} isReadMore={isReadMore}/>
                        <div className={styles.buttons_group}>
                            <Button
                                className={styles.view_btn}
                                text={isReadMore ? 'View more' : 'Show less'}
                                onClick={toggleReadMore}
                            />
                            <Button
                                className={styles.button}
                                text='Contact Us'
                                onClick={() => scrollToElement('contact')}
                            />
                        </div>
                    </div>
                    <div className={styles.images}>
                        <img src={generateImageUrl(item.news_image_one.asset._ref)} alt={item.news_image_one.alt} className={styles.image} />
                        <img src={generateImageUrl(item.news_image_two.asset._ref)} alt={item.news_image_two.alt} className={styles.image} />
                    </div>
                </div>
            );
        }
        ));
};

const CookingCourses: FC<SectionCoursesProps> = ({ data }) => {

    if (!data[0].news_section) {
        return null;
    };

    return (
        <div id='courses' className={styles.courses}>
            <div className={styles.skew} />
            <h1 className={styles.title}>News</h1>
            <div className={styles.cooking_courses}>
                {Course(data[0].news_section)}
            </div>
        </div>
    );
};

export default CookingCourses;