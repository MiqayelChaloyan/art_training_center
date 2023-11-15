
import { FC, useEffect, useState } from 'react';
import styles from './StudentWork.module.sass';
import { generateImageUrl } from '@/utils/imageGenerate';
import Button from '@/components/ui/Button';

type StudentWorkProps = {
    course: any;
}

// import ArrowUp from '../../../icons/ArrowUp';

const StudentWork: FC<StudentWorkProps> = ({ course }) => {
    const [initialLoadCourses, setInitialLoadCourses] = useState<number>(8);

    useEffect(() => setInitialLoadCourses(8), [course]);

    const images = course.student_work_section[0].images.slice(0, initialLoadCourses).map((item: any) => (
        <div key={item._key} className={styles.img_block}>
            <img src={generateImageUrl(item.asset._ref)} alt={item.alt} className={styles.work_img} />
        </div>
    ));

    const handleLoad = () => setInitialLoadCourses(initialLoadCourses + 4);

    return (
        <div id='about-us' className={styles.contain}>
            <div className={styles.skew} />
            <h1 className={styles.title}>Student Work</h1>
            <div className={styles.block}>
                <div className={styles.images_block}>
                    {images}
                </div>

                {9 <= course.student_work_section[0].images.length ? (
                    <div className={styles.buttons}>
                        <div className={styles.btn_group}>
                            <Button
                                className={styles.view_btn}
                                text='View more'
                                onClick={handleLoad}
                            />
                        </div>
                        <div className={styles.btn_group}>
                            <Button
                                className={styles.contact_btn}
                                text='Contact Us'
                                onClick={() => console.log('click')}
                            />
                        </div>
                        {/* <ArrowUp
                            width='23'
                            height='23'
                            fill='red'
                        /> */}
                    </div>
                ) : (
                    <div className={styles.buttons}>
                        <div className={styles.btn_group}>
                            <Button
                                className={styles.contact_btn}
                                text='Contact Us'
                                onClick={() => console.log('click')}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentWork;