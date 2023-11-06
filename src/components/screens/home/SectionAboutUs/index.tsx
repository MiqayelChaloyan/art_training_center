
import { FC } from 'react';
import styles from './SectionAboutUs.module.sass';
import FormAppointment from '@/components/forms/FormAppointment';
import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';
// import cn from 'classnames';
// import components from '@/utils/PortableTextComponents';
// import { PortableText } from '@portabletext/react';

type SectionAboutUsProps = {
    data: HomeContent[];
}

const SectionAboutUs: FC<SectionAboutUsProps> = ({ data }) => {
    const { aboutUsTitle: title, aboutUsContent } = data[0];

    return (
        <div id='about-us' style={{ bottom: '100px', position: 'relative' }}>
            <div className={styles.upper_part} />
            <div className={styles.about_us}>
                <div className={styles.box}>
                    <h2>{title}</h2>
                    {/* <PortableText value={aboutUsContent} components={components} /> */}
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
                <div className={styles.box}>
                    <FormAppointment />
                </div>
            </div>
        </div>
    );
};

export default SectionAboutUs;