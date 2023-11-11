import { FC } from 'react';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import components from '@/utils/PortableTextComponents';
import { PortableText } from '@portabletext/react';

import { generateImageUrl } from '@/utils/imageGenerate';

import styles from './CookingCourses.module.sass';

type SectionCoursesProps = {
    data: HomeContent[];
};

const Course = (data: any[]) => {
    return (
        data.map(item => (
            <div key={item.subtitle} className={styles.course}>
                <div className={styles.content}>
                    <h3 style={{ fontFamily: 'sans-serif' }}>{item.subtitle}</h3>
                    <PortableText value={item.content} components={components} />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ textDecoration: 'underline', fontFamily: 'sans-serif' }}>View more</p>
                        <button className={styles.button}>Contact Us</button>
                    </div>
                </div>
                <div className={styles.images}>
                    <img src={generateImageUrl(item.news_image_one.asset._ref)} alt={item.news_image_one.alt} className={styles.image} />
                    <img src={generateImageUrl(item.news_image_two.asset._ref)} alt={item.news_image_two.alt} className={styles.image} />
                </div>
            </div>
        ))
    );
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