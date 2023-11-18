import { FC, memo } from 'react';

import { Co_workers } from '../../../../../sanity/sanity-queries/co-workers';
import { urlFor } from '../../../../../sanity/sanity';

import styles from './style.module.sass';
import Container from '@/components/components/Container';

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
                    <img src={urlForImage} className={styles.image} />
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
