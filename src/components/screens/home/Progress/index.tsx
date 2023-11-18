import { FC, useEffect, useState } from 'react';
import Container from '@/components/components/Container';
import ProgressBar from '../../../ui/ProgressBar';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: HomeContent[];
};

const Progress: FC<Props> = ({ data }) => {
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
                <ProgressBar value={progress} quantity={item.quantity} />
                <p className={styles.title}>{item.title}</p>
            </div>
        );
    });

    return (
        <div id='circle-progress' className={styles.container}>
            <Container>
                <div className={styles.row}>
                    {items}
                </div>
            </Container>
        </div>
    );
};

export default Progress;
