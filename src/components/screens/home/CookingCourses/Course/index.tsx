import { FC, memo, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import Content from '../../../../ui/ReadMore';

import styles from './style.module.sass';

type Props = {
    altTwo: string;
    altOne: string;
    urlForImageOne: string;
    scrollToElement: any;
    content: any;
    subtitle: string;
}

const Course: FC<Props> = (course) => {
    const [isReadMore, setIsReadMore] = useState<boolean>(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };    

    return (
        <div className={styles.course}>
            <div className={styles.content}>
                <h3 className={styles.subtitle}>{course.subtitle}</h3>
                <Content content={course.content} isReadMore={isReadMore} />
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
                <Image
                    src={course.urlForImageOne}
                    alt={course.altOne}
                    priority
                    className={styles.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <Image
                    src={course.urlForImageOne}
                    alt={course.altTwo}
                    priority
                    className={styles.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    );
};

export default memo(Course);