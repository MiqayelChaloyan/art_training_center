import { FC, useEffect, useState } from 'react';
import styles from './SectionCourses.module.sass';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import ReactPlayer from 'react-player';
import Play from '@/components/icons/Play';
import { generateImageUrl } from '@/utils/imageGenerate';

type SectionCoursesProps = {
    data: HomeContent[];
};

const SectionCourses: FC<SectionCoursesProps> = ({ data }) => {
    const [video, setVideo] = useState<any>(null);
    const { cooking_courses_video_light, cooking_courses_video_url: url } = data[0];
    const lightUrl = generateImageUrl(cooking_courses_video_light.asset._ref);

    useEffect(() => {
        setVideo(<ReactPlayer
            url={url}
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
            <h1 className={styles.title}>COOKING COURSES</h1>
            <div className={styles.courses}>
                <div className={styles.videoPlayer}>
                    {video}
                </div>
            </div>
        </div>
    );
};

export default SectionCourses;

