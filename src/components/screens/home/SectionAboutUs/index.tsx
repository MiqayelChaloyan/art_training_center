
import { FC } from 'react';
import styles from './SectionAboutUs.module.sass';
import FormAppointment from '@/components/forms/FormAppointment';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
import cn from 'classnames';
import components from '@/utils/PortableTextComponents';
import { PortableText } from '@portabletext/react';

type SectionAboutUsProps = {
    data: HomeContent[];
}

const SectionAboutUs: FC<SectionAboutUsProps> = ({ data }) => {
    const { about_us_title, about_us_content } = data[0];

    console.log(about_us_content);
    

    return (
        <div id='about-us' className={styles.contain}>
            <div className={styles.skew}/>
            <h1 className={styles.title}>{about_us_title}</h1>
            <div className={styles.about_us}>
                <div className={styles.box}>
                    <PortableText value={about_us_content} components={components} />
                </div>
                <div className={styles.box}>
                    <FormAppointment />
                </div>
            </div>
        </div>
    );
};

export default SectionAboutUs;