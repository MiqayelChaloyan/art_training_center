import { FC, useEffect, useState } from 'react';
import styles from './CourseProcess.module.sass';
import ReactPlayer from 'react-player';
import Play from '@/components/icons/Play';
import { generateImageUrl } from '@/utils/imageGenerate';

type CourseProcessProps = {
    course: any;
};

const CourseProcess: FC<CourseProcessProps> = ({ course }) => {
    const [video, setVideo] = useState<any>(null);
    const { course_process_video_light, course_process_video_url: link } = course;
    const lightUrl = generateImageUrl(course_process_video_light.asset._ref);

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
        <div id='course-process' className={styles.container}>
            <div className={styles.skew} />
            <h1 className={styles.title}>COURSE PROCESS</h1>
            <div className={styles.player_block}>
                <div className={styles.player}>
                    {video}
                </div>
            </div>
        </div>
    );
};

export default CourseProcess;

