import { FC, memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import Play from '@/components/icons/Play';
import { generateImageUrl } from '@/utils/imageGenerate';

import styles from './style.module.sass';

type VideoPlayerProps = {
    data: HomeContent[];
};

const VideoPlayer: FC<VideoPlayerProps> = ({ data }) => {
    const [video, setVideo] = useState<string | any>(null);
    const { cooking_courses_video_light, cooking_courses_video_url: link } = data[0];
    const lightUrl = generateImageUrl(cooking_courses_video_light.asset._ref);

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
                light={lightUrl}
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
        <div id='player' className={styles.container}>
            <div className={styles.skew} />
            <h1 className={styles.title}>COOKING COURSES</h1>
            <div className={styles.player_block}>
                <div className={styles.player}>
                    {video}
                </div>
            </div>
        </div>
    );
};

export default memo(VideoPlayer);

