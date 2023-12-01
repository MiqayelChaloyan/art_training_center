import { FC, memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

import { Inter } from 'next/font/google';

import Image from 'next/image';

import Play from '@/components/icons/Play';
import Container from '@/components/components/Container';

import { urlFor } from '../../../../../sanity/sanity';
import { Courses } from '../../../../../sanity/sanity-queries/courses';

import styles from './style.module.sass';

type Props = {
    course: Courses
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const VideoPlayer: FC<Props> = ({ course }) => {
    const [video, setVideo] = useState<string | any>(null);
    const [filter, setFilter] = useState<boolean>(true);
    const { t } = useTranslation();

    const urlForImage = urlFor(course.course_process[0].video_light)
        .auto('format')
        .fit('max')
        .url();

    useEffect(() => {
        setVideo(
            <ReactPlayer
                className='react-player'
                url={course.course_process[0].video_url}
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
                        style={{ filter: filter ? 'brightness(0.5)' : 'brightness(1)' }}
                    />
                }
                loading='lazy'
                playing={true}
                config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
                playIcon={
                    <div className={styles.icon}>
                        <Play
                            width='90'
                            height='90'
                            fill='white'
                        />
                    </div>
                }
                onPlay={() => setFilter(false)}
            />
        );
    }, [course]);

    return (
        <div id='video-player' className={styles.container}>
            <Container>
                <h1 className={`${styles.title} ${inter.variable}`}>{t('pages.courses_process')}</h1>
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

