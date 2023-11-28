import { FC, memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import Play from '@/components/icons/Play';
import Container from '@/components/components/Container';

import { urlFor } from '../../../../../sanity/sanity';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: any;
};

const VideoPlayer: FC<Props> = ({ data }) => {
    const [video, setVideo] = useState<string | any>(null);
    const [filter, setFilter] = useState<boolean>(true);

    const urlForImage = urlFor(data[0].cooking_courses[0].video_light)
        .auto('format')
        .fit('max')
        .url();

    useEffect(() => {
        setVideo(
            <ReactPlayer
                style={{ filter: filter ? 'brightness(0.5)' : 'brightness(1)' }}
                className='react-player'
                url={data[0].cooking_courses[0].video_url}
                controls
                width='100%'
                height='100%'
                muted
                loop={false}
                light={urlForImage}
                loading="lazy"
                playing={true}
                config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
                playIcon={
                    <Play
                        width='104'
                        height='104'
                        fill='white'
                    />
                }
                onPlay={() => setFilter(false)}
            />
        );
    }, [filter]);

    return (
        <div id='video-player' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>{data[0].cooking_courses[0].video_section_title}</h1>
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

