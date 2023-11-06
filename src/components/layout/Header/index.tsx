import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import styles from './Header.module.sass';
import { useRouter } from 'next/router';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';

type IHeaderProps = {
    typePosition: string
}

const Header = ({ typePosition }: IHeaderProps) => {
    const { pathname } = useRouter();
    const [inputNameValue, setInputNameValue] = useState('');

    const inputNameChange = (value: string) => {
        setInputNameValue(value);
    };

    return (
        <header>
            <div className={styles.nav}>
                <Link href='/' aria-label='ART Training Center Logo'>
                    <Logo
                        width='104'
                        height='104'
                        fill='#111111'
                    />
                </Link>
                <div className={styles.links}>
                    <Link href='/'  className={`${styles.link} ${pathname === '/' ? styles.linkActive : ''}`}>About Us</Link>
                    <Button
                        className={styles.btn}
                        text="Courses"
                        onClick={() => console.log('click')}
                    />
                    <Link href='/co_workers'  className={`${styles.link} ${pathname === '/co_workers' ? styles.linkActive : ''}`}>CO-Workers</Link>
                    <Link href='/price_list'  className={`${styles.link} ${pathname === '/price_list' ? styles.linkActive : ''}`}>Price List</Link>
                </div>
                <div className={styles.inputField}>
                    <InputField
                        className={styles.input}
                        type='name'
                        placeholder='Search'
                        requiredField={true}
                        value={inputNameValue}
                        onChange={inputNameChange}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
