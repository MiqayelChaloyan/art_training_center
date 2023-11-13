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
        setVideo(<ReactPlayer
            url={link}
            controls={true}
            width="100%"
            height="100%"
            muted={true}
            light={lightUrl}
            playing={true}
            playIcon={
                <Play
                    width='104'
                    height='104'
                    fill='white'
                />}
        />);
    }, []);

    return (
        <div id='courses' className={styles.video_box}>
            <div className={styles.skew} />
            <h1 className={styles.title}>COURSE PROCESS</h1>
            <div className={styles.courses}>
                <div className={styles.videoPlayer}>
                    {video}
                </div>
            </div>
        </div>
    );
};

export default CourseProcess;

