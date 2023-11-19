import { memo } from 'react';
import { PortableText } from '@portabletext/react';

import components from '@/utils/PortableTextComponents';

import styles from './styles.module.sass';

type Props = {
    url: string;
    subtitle: string;
    content: any;
};

const SlideItem: React.FC<Props> = ({ url, subtitle, content }) => (
    <div className={styles.emplay_slide}>
        <div className={styles.box} style={{backgroundImage: `url(${url})`}}>
            <div className={styles.contact}>
                <h1 className={styles.title}>{subtitle}</h1>
                <PortableText value={content} components={components} />
            </div>
        </div>
    </div>
);

export default memo(SlideItem);