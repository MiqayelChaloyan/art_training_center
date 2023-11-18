import { memo } from 'react';
import { PortableText } from '@portabletext/react';

import Button from '@/components/ui/Button';
import components from '@/utils/PortableTextComponents';

import styles from './styles.module.sass';

type Props = {
    url: string;
    subtitle: string;
    content: any;
    alt: string;
    scrollToElement: (value: number) => void;
};

const SlideItem: React.FC<Props> = ({ url, alt, subtitle, content, scrollToElement }) => (
    <div className={styles.emplay_slide}>
        <div className={styles.box}>
            <img
                className={styles.back_image}
                src={url}
                alt={alt}
            />
            <div className={styles.contact}>
                <h1 className={styles.title}>{subtitle}</h1>
                <PortableText value={content} components={components} />
                <Button
                    className={styles.contact_btn}
                    text='Contact Us'
                    onClick={scrollToElement}
                />
            </div>
        </div>
    </div>
);

export default memo(SlideItem);