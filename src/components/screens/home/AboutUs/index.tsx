import { FC, memo } from 'react';

import FormAppointment from '@/components/forms/FormAppointment';
import HeaderForm from '@/components/ui/HeaderForm/HeaderForm';
import Container from '@/components/components/Container';

import { PortableText } from '@portabletext/react';
import components from '@/utils/PortableTextComponents';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: HomeContent[];
};

const group = {
    ['margin']: '0',
};

const AboutUs: FC<Props> = ({ data }) => {
    const { about_us_title, about_us_content } = data[0];
    
    return (
        <div id='about-us' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>{about_us_title}</h1>
                <div className={styles.about_us}>
                    <div className={styles.about_box}>
                        <PortableText value={about_us_content[0] as any} components={components} />
                    </div>
                    <div className={styles.form_box}>
                        <FormAppointment width='30%'>
                            <HeaderForm
                                display='flex'
                                color='black'
                                justifyContent='space-around'
                                title='Contact Us'
                                fill='#111111'
                                fontSize='28px'
                                group={group}
                            />
                        </FormAppointment>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default memo(AboutUs);