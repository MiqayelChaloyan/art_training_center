import { FC, useEffect, useState } from 'react';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import styles from './Progress.module.sass';
import ProgressBar from '../../../ui/ProgressBar';

type ProgressProps = {
    data: HomeContent[];
};

const Progress: FC<ProgressProps> = ({ data }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((val) => val + 1);
        }, 100);

        return () => clearInterval(intervalId);

    }, []);

    const items = data[0].progress_section.map((item: any) => {
        return (
            <div key={item._key} className={styles.column}>
                <ProgressBar value={progress} quantity={item.quantity}/>
                <p className={styles.title}>{item.title}</p>
            </div>
        );
    });

    return (
        <div id='circle-progress' className={styles.container}>
            <div className={styles.row}>
                {items}
            </div>
        </div>
    );
};

export default Progress;
