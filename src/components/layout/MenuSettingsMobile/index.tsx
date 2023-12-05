import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAppDispatch } from '@/hooks/useStore';
import { openModal } from '@/store/stateModalSlice';

import Home from '@/components/icons/Home';
import Courses from '@/components/icons/Courses';
import PriceList from '@/components/icons/PriceList';
import CoWorkers from '@/components/icons/CoWorkers';
import Contact from '@/components/icons/Contact';

import styles from './style.module.sass';

const MenuSettingsMobile = () => {
	const dispatch = useAppDispatch();
	const { pathname } = useRouter();

	return (
		<div className={styles.nav_menu}>
			<div className={styles.nav_list}>
				<Link
					className={`${pathname === '/' ? `${styles.linkActive}` : ''} ${styles.nav__link}`}
					href='/'
					title='Home'
				>
					<Home width={25} height={25} fill='white' />
				</Link>
				<button
					className={styles.nav__link}
					onClick={() => setTimeout(() => dispatch(openModal()), 500)}
					title='Courses'
				>
					<Courses width={25} height={25} fill='white' />
				</button>
				<Link
					className={`${pathname === '/price_list' ? `${styles.linkActive}` : ''} ${styles.nav__link}`}
					href='/price_list'
					title='Price List'
				>
					<PriceList width={25} height={25} fill='white' />
				</Link>
				<Link
					className={`${pathname === '/co_workers' ? `${styles.linkActive}` : ''} ${styles.nav__link}`}
					href='/co_workers'
					title='Co Worker'
				>
					<CoWorkers width={30} height={25} fill='white' />
				</Link>
				<Link
					className={styles.nav__link}
					href='tel:+37477111111'
					title='Contact us'
				>
					<Contact width={25} height={25} fill='white' />
				</Link>
			</div>
		</div>
	);
};

export default MenuSettingsMobile;