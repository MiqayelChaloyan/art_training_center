import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import Button from '@/components/ui/Button';

import styles from './styles.module.sass';

type Props = {
    url: string;
    subtitle: string;
    content: any;
    alt: string;
    scrollToElement: (value: number) => void;
};

const SlideItem: React.FC<Props> = ({ url, alt, subtitle, content, scrollToElement }) => {
    const { t } = useTranslation();

    return (
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
                    <p>{content}</p>
                    <Button
                        className={styles.contact_btn}
                        text={t('button.contact-us')}
                        onClick={scrollToElement}
                    />
                </div>
            </div>
        </div>
    )
};

export default memo(SlideItem);