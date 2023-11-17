
import { FC } from 'react';
import styles from './SectionAboutUs.module.sass';
import FormAppointment from '@/components/forms/FormAppointment';
import components from '@/utils/PortableTextComponents';
import { PortableText } from '@portabletext/react';
import HeaderForm from '@/components/ui/HeaderForm/HeaderForm';
import { Courses } from '../../../../../sanity/sanity-queries/courses';

type SectionAboutUsProps = {
    course: any;
}

const group = {
    ['margin']: '0'
};

const SectionAboutUs: FC<SectionAboutUsProps> = ({ course }) => {
    const { about_us_title, about_us_content } = course as any;    
    
    return (
        <div id='about-us' className={styles.contain}>
            <div className={styles.skew} />
            <h1 className={styles.title}>{about_us_title}</h1>
            <div className={styles.about_us}>
                <div className={styles.about_box}>
                    <PortableText value={about_us_content[0] as any} components={components} />
                </div>
                <div className={styles.form_box}>
                    <FormAppointment width='50%'>
                        <HeaderForm display='flex' color='black' justifyContent='space-around' title='Contact Us' fill='#111111' fontSize='28px' group={group}/>
                    </FormAppointment>
                </div>
            </div>
        </div>
    );
};

export default SectionAboutUs;