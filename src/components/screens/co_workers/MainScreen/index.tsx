import { FC } from 'react';
import styles from './MainScreen.module.sass';
import { Co_workers } from '../../../../../sanity/sanity-queries/co-workers';
import { generateImageUrl } from '@/utils/imageGenerate';


type MainProps = {
    data: Co_workers[];
    isError: boolean;
}

const MainScreen: FC<MainProps> = ({ data, isError }) => {
    const workers = data.map((item: any) => (
        <div key={item._key} className={styles.co_worker}>
            <div className={styles.image_container}>
                <img src={generateImageUrl(item.co_workers_image.asset._ref)} className={styles.image} />
            </div>
            <p className={styles.text}>{item.name}</p>
        </div>
    ));

    return (
        <div id='main-screen' className={styles.screen}>
            <div className={styles.main}>
                <p>CO-WORKERS</p>
                <div className={styles.workers}>
                    {workers}
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
