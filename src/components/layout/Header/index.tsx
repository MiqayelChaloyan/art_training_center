import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAppDispatch } from '@/hooks/useStore';
import { openModal } from '@/store/stateModalSlice';

import cn from 'classnames';

import Logo from '@/components/icons/Logo';
import Button from '@/components/ui/Button';

import styles from './Header.module.sass';

// import InputField from '@/components/ui/InputField';

type IHeaderProps = {
    typePosition: string
}

const Header = ({ typePosition }: IHeaderProps) => {
    const { pathname } = useRouter();
    // const [inputNameValue, setInputNameValue] = useState('');
    const [isSticky, setIsSticky] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const dispatch = useAppDispatch();

    // const inputNameChange = (value: string) => {
    //     setInputNameValue(value);
    // };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenuClick = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <header className={cn(
            styles.box,
            `${typePosition === 'fixed' ? styles.boxFixed : ''}`,
            `${isSticky ? styles.boxScrolled : ''}`,
            `${isOpenMenu ? styles.boxOpenMenu : ''}`
        )}>
            <div className={`container ${styles.wrap}`}>
                <Link href='/' aria-label='ART Training Center Logo' className={cn(styles.logo, `${isSticky ? styles.logoSticky : ''}`)}>
                    <Logo
                        width='104'
                        height='104'
                        fill='#111111'
                    />
                </Link>
                <div className={cn(
                    styles.content,
                    `${isOpenMenu ? styles.contentShow : ''}`,
                    `${isSticky && isOpenMenu ? styles.contentSticky : ''}`,
                )}>
                    <div className={styles.nav}>
                        <Link href='/' className={`${styles.link} ${pathname === '/' ? styles.linkActive : ''}`}>About Us</Link>
                        <Button
                            text='Courses'
                            onClick={() =>
                                setTimeout(() => dispatch(openModal()), 500)
                            }
                            className={styles.btn}
                        />
                        <Link href='/co_workers' className={`${styles.link} ${pathname === '/co_workers' ? styles.linkActive : ''}`}>CO-Workers</Link>
                        <Link href='/price_list' className={`${styles.link} ${pathname === '/price_list' ? styles.linkActive : ''}`}>Price List</Link>
                    </div>
                    {/* <div>
                        <InputField
                            className={styles.input}
                            type='name'
                            placeholder='Search'
                            requiredField={true}
                            value={inputNameValue}
                            onChange={inputNameChange}
                        />
                    </div> */}
                </div>
                <button
                    className={cn(
                        styles.menuBtn,
                        `${isOpenMenu ? styles.menuBtnActive : ''}`,
                    )}
                    onClick={toggleMenuClick}
                    title='Art Training Center Menu'
                ><span></span></button>
            </div>
        </header>
    );
};

export default Header;
