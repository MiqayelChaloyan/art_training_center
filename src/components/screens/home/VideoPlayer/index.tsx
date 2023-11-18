import { FC, memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import Play from '@/components/icons/Play';
import Container from '@/components/components/Container';

import { urlFor } from '../../../../../sanity/sanity';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: HomeContent[];
};

const VideoPlayer: FC<Props> = ({ data }) => {
    const [video, setVideo] = useState<string | any>(null);
    const { cooking_courses_video_light, cooking_courses_video_url: link } = data[0];

    const urlForImage = urlFor(cooking_courses_video_light)
        .auto('format')
        .fit('max')
        .url();

    useEffect(() => {
        setVideo(
            <ReactPlayer
                className='react-player'
                url={link}
                controls
                width='100%'
                height='100%'
                muted
                loop={false}
                light={urlForImage}
                loading='lazy'
                playing={true}
                config={
                    {
                        youtube: {
                            playerVars: { showinfo: 1 }
                        },
                    }
                }
                playIcon={
                    <Play
                        width='104'
                        height='104'
                        fill='white'
                    />
                }
            />
        );
    }, []);

    return (
        <div id='video-player' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>COOKING COURSES</h1>
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

