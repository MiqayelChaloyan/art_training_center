import { FC, memo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import Button from '@/components/ui/Button';
import Content from '../../../../ui/ReadMore';

import { Inter } from 'next/font/google';

import styles from './style.module.sass';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

type Props = {
    altTwo: string
    altOne: string
    urlForImageOne: string
    urlForImageTwo: string
    scrollToElement: any
    content: any
    subtitle: string
};

const Course: FC<Props> = (course) => {
    const [isReadMore, setIsReadMore] = useState<boolean>(true);
    const { t } = useTranslation();

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };    

    return (
        <div className={styles.course}>
            <div className={styles.content}>
                <h3 className={`${styles.subtitle} ${inter.variable}`}>{course.subtitle}</h3>
                <Content content={course.content} isReadMore={isReadMore} />
                <div className={styles.buttons_group}>
                    <Button
                        className={`${styles.view_btn} ${inter.variable}`}
                        text={isReadMore ? t('button.view-more') : t('button.show-less')}
                        onClick={toggleReadMore}
                    />
                    <Button
                        className={`${styles.button} ${inter.variable}`}
                        text={t('button.contact-us')}
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
                    src={course.urlForImageTwo}
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