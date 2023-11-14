import React from 'react';

import styles from './Footer.module.sass';
import FormAppointment from '@/components/forms/FormAppointment';
import HeaderForm from '@/components/ui/HeaderForm/HeaderForm';
import Link from 'next/link';
import logo from '../../../../public/images/Mask.png';
import Image from 'next/image';
import Map from '@/components/ui/Map';


const group = {
    ['margin']: '0 auto'
};

const Footer = () => {

    return (
        <footer  id='footer' className={styles.footer}>
            <div>
                <div className={styles.google_map}>
                    <Map  width={'100%'} height={'100%'}/>
                    <p className={styles.address}>Adress: Yerevan, Armenia</p>
                </div>
                <div className={styles.box}>
                    <FormAppointment width='30%'>
                        <HeaderForm display='grid' color='white' justifyContent='center' title='CONTACT US' fontSize='40px' fill='white' group={group} />
                    </FormAppointment>
                </div>
                <div className={styles.links}>
                    <div className={styles.contain}>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>About Us</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Courses</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>About Us</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Courses</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>About Us</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Courses</p>
                        </Link>
                    </div>
                    <div className={styles.contain}>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>CO-Workers</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Courses</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>CO-Workers</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Courses</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>CO-Workers</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Courses</p>
                        </Link>
                    </div>
                    <div className={styles.contain}>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Price list</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>About Us</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Price list</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>About Us</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Price list</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>About Us</p>
                        </Link>
                    </div>
                    <div className={styles.contain}>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>CO-Workers</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Price list</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>CO-Workers</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Price list</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>CO-Workers</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Price list</p>
                        </Link>
                    </div>
                    <div className={styles.contain}>
                        <Image
                            src={logo}
                            alt="Footer Logo"
                            priority
                            width={0}
                            height={0}
                            style={{ width: '30%', height: 'auto', objectFit: 'scale-down', margin: '0 auto' }}
                        />
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>tell. +374 77 11 11 11</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Email art.house@bk.ru</p>
                        </Link>
                        <Link href={'/'} aria-label='/' className={styles.icon}>
                            <p className={styles.copyright}>Armenia, Yereva, Abovyan 33</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;