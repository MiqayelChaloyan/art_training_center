import { memo } from 'react';
import Image from 'next/image';

// import { PortableText } from '@portabletext/react';
// import components from '@/utils/PortableTextComponents';

import styles from './styles.module.sass';

type Props = {
    url: string;
    title: string;
    content: any;
    alt: string;
};

const SlideItem: React.FC<Props> = ({ url, title, content, alt }) => (
    <div className={styles.emplay_slide}>
        <div className={styles.box}>
            <Image
                src={url}
                alt={alt}
                priority
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
            <div className={styles.contact}>
                <h1 className={styles.title}>{title}</h1>
                {/* <PortableText value={content} components={components} /> */}
                <p>{content}</p>
            </div>
        </div>
    </div>
);

export default memo(SlideItem);