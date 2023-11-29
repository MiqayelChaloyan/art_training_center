import { FC } from 'react';
import Container from '@/components/components/Container';
import ProgressBar from '../../../ui/ProgressBar';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

type Props = {
    data: HomeContent[];
};

const Progress: FC<Props> = ({ data }) => {
    const items = data[0].progress_section.map((item: any) => {
        return (
            <div key={item.slug} className={styles.column}>
                <ProgressBar value={0} quantity={item.quantity} />
                <p className={`${styles.title} ${inter.variable}`}>{item.title}</p>
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
