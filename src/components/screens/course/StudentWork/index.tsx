
import { FC } from 'react';
import styles from './StudentWork.module.sass';

type StudentWorkProps = {
    course: any;
}

const group = {
    ['margin']: '0'
};

const StudentWork: FC<StudentWorkProps> = ({ course }) => {
    // const { about_us_title, about_us_content } = course as any;    
    
    return (
        <div id='about-us' className={styles.contain}>
            <div className={styles.skew} />
            <h1 className={styles.title}>Student Work</h1>
            <div className={styles.about_us}>
                {/* <div className={styles.box}>
                    <PortableText value={about_us_content[0] as any} components={components} />
                </div>
                <div className={styles.box}>
                    <FormAppointment width='50%'>
                        <HeaderForm display='flex' color='black' justifyContent='space-around' title='Contact Us' fill='#111111' fontSize='28px' group={group}/>
                    </FormAppointment>
                </div> */}
            </div>
        </div>
    );
};

export default StudentWork;