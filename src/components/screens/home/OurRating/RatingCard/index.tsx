import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import Search from '@/components/icons/Search';
import Star from '@/components/icons/Star';

import { Inter } from 'next/font/google';

import styles from './style.module.sass';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const RatingCard = ({ options }: any) => {
    const { t } = useTranslation();
    
    return (
        <div className={styles.column}>
            <Image
                src={options.urlForImageBackground}
                alt={options.urlImageBackgroundAlt}
                priority
                className={styles.background_image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
            <div className={styles.fix} style={{ marginTop: `${options.top ? options.top : 20}px` }}>
                <div className={styles.card_header} style={{ marginBottom: `${options.bottom ? options.bottom : 20}px` }}>
                    <div className={styles.card_header_text}>
                        <p className={inter.variable}>{t('texts.rating-title')}</p>
                    </div>
                    <div className={styles.card_header_icon}>
                        <Search
                            width='25'
                            height='25'
                            fill='white'
                        />
                    </div>
                </div>
                <div className={styles.card} style={{ marginLeft: `${options.left ? options.left : 10}px` }}>
                    <div className={styles.card_image}>
                        <Image
                            src={options.urlForImage}
                            alt={options.urlImageAlt}
                            priority
                            className={styles.image_center}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.card_content}>
                        <p className={`${styles.name} ${inter.variable}`}>{options.name}</p>
                        <div className={styles.rating}>
                            {
                                Array.from(Array(options.rating).keys()).map((star, index) => (
                                    <Star
                                        width='20'
                                        height='20'
                                        fill={star ? 'black' : 'white'}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                        <p className={`${styles.content} ${inter.variable}`}>{options.result.slice(0, 100)}...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(RatingCard);