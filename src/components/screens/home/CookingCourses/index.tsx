import { FC } from 'react';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import components from '@/utils/PortableTextComponents';
import { PortableText } from '@portabletext/react';

import { generateImageUrl } from '@/utils/imageGenerate';

import styles from './CookingCourses.module.sass';

type SectionCoursesProps = {
    data: HomeContent[];
}

const Course = (data: { newsSection: any[]; }[]) => {
    return (
        data[0].newsSection.map(item => (
            <div key={item.subtitle} className={styles.course}>
                <div className={styles.content}>
                    <h3>{item.subtitle}</h3>
                    <PortableText value={item.content} components={components}/>
                    <button className={styles.button}>Contact Us</button>
                </div>
                <div className={styles.images}>
                    <img src={generateImageUrl(item.newsImageOne.asset._ref)} alt={item.newsImageOne.alt} className={styles.image} />
                    <img src={generateImageUrl(item.newsImageTwo.asset._ref)} alt={item.newsImageTwo.alt} className={styles.image} />
                </div>
            </div>
        ))
    );
};

const CookingCourses: FC<SectionCoursesProps> = ({ data }) => {
    return (
        <div id='courses' className={styles.courses}>
            <div className={styles.upper_part}>
                <h1 style={{textAlign: 'center'}}>News</h1>
            </div>
            <div className={styles.cooking_courses}>
                {Course(data)}
            </div>
        </div>
    );
};

export default CookingCourses;