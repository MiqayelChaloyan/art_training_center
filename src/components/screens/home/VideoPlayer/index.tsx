import { FC, memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';

import useWindowSize from '@/hooks/useWindowSize';

import Play from '@/components/icons/Play';
import Container from '@/components/components/Container';

import { urlFor } from '../../../../../sanity/sanity';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import { Inter } from 'next/font/google';

import styles from './style.module.sass';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

type Props = {
    data: HomeContent[];
};

const VideoPlayer: FC<Props> = ({ data }) => {
    const [video, setVideo] = useState<string | any>(null);
    const [filter, setFilter] = useState<boolean>(true);
    const size = useWindowSize();

    const urlForImage = urlFor(data[0].cooking_courses[0].video_light)
        .auto('format')
        .fit('max')
        .url();

    useEffect(() => {
        setVideo(
            <ReactPlayer
                className='react-player'
                url={data[0].cooking_courses[0].video_url}
                controls
                width='100%'
                height='100%'
                muted
                loop={false}
                  light={
                    <Image
                        src={urlForImage}
                        alt='background-image'
                        priority
                        className={styles.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ filter: filter ? 'brightness(0.5)' : 'brightness(1)'  }}
                    />
                }
                loading="lazy"
                playing={true}
                config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
                playIcon={
                    <div className={styles.icon}>
                        <Play
                            width={size.width > 767 ? 104 : 50}
                            height={size.width > 767 ? 104 : 50}
                            fill='white'
                        />
                    </div>
                }
                onPlay={() => setFilter(false)}
            />
        );
    }, [filter]);

    return (
        <div id='video-player' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={`${styles.title} ${inter.variable}`}>{data[0].cooking_courses[0].video_section_title}</h1>
                <div className={styles.video_player}>
                    <div className={styles.player}>
                        {video}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default memo(VideoPlayer);

