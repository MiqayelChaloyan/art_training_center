import { memo } from 'react';

import styles from './style.module.sass';
import Button from '@/components/ui/Button';

import Content from '../../../../ui/ReadMore';

const Course = (course: any) => (
    <div className={styles.course}>
        <div className={styles.content}>
            <h3 className={styles.subtitle}>{course.subtitle}</h3>
            <Content content={course.result} isReadMore={course.isReadMore}/>
            <div className={styles.buttons_group}>
                <Button
                    className={styles.view_btn}
                    text={course.isReadMore ? 'View more' : 'Show less'}
                    onClick={course.toggleReadMore}
                />
                <Button
                    className={styles.button}
                    text='Contact Us'
                    onClick={course.scrollToElement}
                />
            </div>
        </div>
        <div className={styles.images}>
            <img src={course.urlForImageOne} alt={course.altOne} className={styles.image} />
            <img src={course.urlForImageTwo} alt={course.altTwo} className={styles.image} />
        </div>
    </div>
);

export default memo(Course);