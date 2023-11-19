import { memo, useState } from 'react';

import Button from '@/components/ui/Button';
import Content from '../../../../ui/ReadMore';

import styles from './style.module.sass';

const Course = (course: any) => {
    const [isReadMore, setIsReadMore] = useState<boolean>(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className={styles.course}>
            <div className={styles.content}>
                <h3 className={styles.subtitle}>{course.subtitle}</h3>
                <Content content={course.result} isReadMore={isReadMore} />
                <div className={styles.buttons_group}>
                    <Button
                        className={styles.view_btn}
                        text={isReadMore ? 'View more' : 'Show less'}
                        onClick={toggleReadMore}
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
};

export default memo(Course);