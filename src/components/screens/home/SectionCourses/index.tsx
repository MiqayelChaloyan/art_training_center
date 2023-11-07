
import { FC } from 'react';
import styles from './SectionCourses.module.sass';
import cn from 'classnames';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import components from '@/utils/PortableTextComponents';
import { PortableText } from '@portabletext/react';

type SectionCoursesProps = {
    data: HomeContent[];
}

const SectionCourses: FC<SectionCoursesProps> = ({ data }) => {
    // const { aboutUsTitle: title, aboutUsContent } = data[0];

    // console.log(aboutUsContent)

    return (
        <div id='courses' style={{ bottom: '100px', position: 'relative', background: '#E3E1E1' }}>
            <div className={styles.upper_part} />
            <div className={styles.courses}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
};

export default SectionCourses;