import { memo } from 'react';
// import Image from 'next/image';
import { Inter } from 'next/font/google';

import styles from './styles.module.sass';

type Props = {
    url: string;
    title: string;
    content: any;
    alt: string;
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const SlideItem: React.FC<Props> = ({ url, title, content, alt }) => (
    <div className={styles.emplay_slide}>
        <div className={styles.box} style={{backgroundImage: `url(${url})`}}>
            {/* <Image
                src={url}
                alt={alt}
                priority
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: 'revert' }}
            /> */}
            <div className={styles.contact}>
                <h1 className={`${styles.title} ${inter.variable}`}>{title}</h1>
                <p className={inter.variable}>{content}</p>
            </div>
        </div>
    </div>
);

export default memo(SlideItem);