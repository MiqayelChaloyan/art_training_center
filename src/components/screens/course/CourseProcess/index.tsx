import { FC, memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import Play from '@/components/icons/Play';
import Container from '@/components/components/Container';

import { urlFor } from '../../../../../sanity/sanity';
import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './style.module.sass';

type Props = {
    course: Courses[];
};

const VideoPlayer: FC<Props> = ({ course }) => {
    const [video, setVideo] = useState<string | any>(null);
    const { course_process_video_light, course_process_video_url: link } = course as any;

    const urlForImage = urlFor(course_process_video_light)
        .auto('format')
        .fit('max')
        .url();

    useEffect(() => {
        setVideo(
            <ReactPlayer
                style={{filter: 'brightness(0.5)'}}
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
                <h1 className={styles.title}>COURSE PROCESS</h1>
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

