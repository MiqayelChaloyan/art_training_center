
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
    const { aboutUsTitle: title, aboutUsContent } = data[0];

    return (
        <div id='about-us' className={styles.contain}>
            <div className={styles.skew}/>
            <h1 style={{
                textAlign: 'center',
                position: 'absolute',
                margin: '0 auto',
                width: '35%',
                top: '15px'
            }}>{title}</h1>

            <div className={styles.about_us}>
                <div className={styles.box}>
                    <PortableText value={aboutUsContent} components={components} />
                </div>
                <div className={styles.box}>
                    <FormAppointment />
                </div>
            </div>
        </div>
    );
};

export default SectionAboutUs;