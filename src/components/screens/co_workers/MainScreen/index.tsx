import { FC, memo } from 'react';
import Image from 'next/image';

import Container from '@/components/components/Container';

import { Co_workers } from '../../../../../sanity/sanity-queries/co-workers';
import { urlFor } from '../../../../../sanity/sanity';

import styles from './style.module.sass';

type MainProps = {
    data: Co_workers[];
    isError: boolean;
}

const MainScreen: FC<MainProps> = ({ data, isError }) => {
    const workers = data.map((item: any) => {
        const urlForImage = urlFor(item.co_workers_image)
            .auto('format')
            .fit('max')
            .url();
            
        return (
            <div key={item._id} className={styles.co_worker}>
                <div className={styles.image_container}>
                    <Image
                        src={urlForImage}
                        alt={item.co_workers_image.alt || 'co-worker-company'}
                        priority
                        className={styles.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <p className={styles.text}>{item.name}</p>
            </div>
        );
    });

    return (
        <div id='main-screen' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>CO-WORKERS</h1>
                <div className={styles.workers}>
                    {workers}
                </div>
            </Container>
        </div>
    );
};

export default memo(MainScreen);
