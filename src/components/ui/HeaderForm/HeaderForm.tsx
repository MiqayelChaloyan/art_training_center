import Link from 'next/link';
import { Hosts } from '@/constants/constants';

import Instagram from '../../icons/Instagram';
import Google from '../../icons/Google';
import Facebook from '../../icons/Facebook';

import styles from './HeaderForm.module.sass';

interface Props {
    display?: string,
    color?: string
    justifyContent?: string
    title?: string
    fill?: string
    group?: object
    fontSize?: string
};

const HeaderForm: React.FC<Props> = ({ display, color, justifyContent, fontSize, title, fill , group}) => {
    return (
        <div className={styles.containerForm} style={{ display, justifyContent }}>
            <h1 className={styles.title} style={{ color, fontSize }}>{title}</h1>
            <div style={{...group}}>
                <Link href={Hosts.facebook} aria-label='Facebook' className={styles.icon} target="_blank">
                    <Facebook
                        width='23'
                        height='23'
                        fill={fill}
                    />
                </Link>
                <Link href={Hosts.instagram} aria-label='Instagram' className={styles.icon} target="_blank">
                    <Instagram
                        width='23'
                        height='23'
                        fill={fill}
                    />
                </Link>
                <Link href={Hosts.google} aria-label='Google' className={styles.icon} target="_blank">
                    <Google
                        width='23'
                        height='23'
                        fill={fill}
                    />
                </Link>
            </div>
        </div>
    );
};

export default HeaderForm;