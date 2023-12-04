import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Inter } from 'next/font/google';

import Button from '@/components/ui/Button';

import styles from './styles.module.sass';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

type Props = {
    url: string
    subtitle: string
    content: any
    alt: string
    scrollToElement: (value: number) => void
};

const SlideItem: React.FC<Props> = ({ url, alt, subtitle, content, scrollToElement }) => {
    const { t } = useTranslation();
    const description = content.length <= 312 ? content : content.slice(0, 313) + '...';

    return (
        <div className={styles.emplay_slide} style={{backgroundImage: `url(${url})`}}>
            <div className={styles.box}>
                <div className={styles.contact}>
                    <h1 className={`${styles.title} ${inter.variable}`}>{subtitle}</h1>
                    <p className={inter.variable}>{description}</p>
                    <Button
                        className={`${styles.contact_btn} ${inter.variable}`}
                        text={t('button.contact-us')}
                        onClick={scrollToElement}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(SlideItem);