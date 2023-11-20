import { memo } from 'react';
import Image from 'next/image';

import { PortableText } from '@portabletext/react';
import components from '@/utils/PortableTextComponents';

import styles from './styles.module.sass';

type Props = {
    url: string;
    subtitle: string;
    content: any;
    alt: string;
};

const SlideItem: React.FC<Props> = ({ url, subtitle, content, alt }) => (
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
                <h1 className={styles.title}>{subtitle}</h1>
                <PortableText value={content} components={components} />
            </div>
        </div>
    </div>
);

export default memo(SlideItem);