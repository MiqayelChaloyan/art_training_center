import React from 'react';
import Link from 'next/link';

import { useAppDispatch } from '@/hooks/useStore';
import { openModal } from '@/store/stateModalSlice';

import Home from '@/components/icons/Home';
import Courses from '@/components/icons/Courses';
import PriceList from '@/components/icons/PriceList';
import CoWorkers from '@/components/icons/CoWorkers';
import Contact from '@/components/icons/Contact';

import styles from './style.module.sass';
import { useRouter } from 'next/router';
import useWindowSize from '@/hooks/useWindowSize';

const MenuSettings = () => {
	const dispatch = useAppDispatch();
	const { pathname } = useRouter();

	const size = useWindowSize();

	return (
		<div className={size.width >= 767 ? styles.nav_menu : styles.mobile_nav_menu}>
			<div className={styles.nav_list}>
				<Link
					className={`${pathname === '/' ? `${size.width <= 767 && styles.linkActive}` : ''} ${size.width >= 767 ? styles.btn_home : styles.nav__link}`}
					href='/'
					title='Home'
				>
					<Home width={20} height={20} fill='white' />
				</Link>
				<button
					className={`${styles.nav__link}  ${size.width >= 767 ? styles.btn_courses : styles.nav__link}`}
					onClick={() => setTimeout(() => dispatch(openModal()), 500)}
					title='Courses'
				>
					<Courses width={20} height={20} fill='white' />
				</button>
				<Link
					className={`${pathname === '/price_list' ? `${size.width <= 767 && styles.linkActive}` : ''} ${size.width >= 767 ? styles.btn_price_list : styles.nav__link}`}
					href='/price_list'
					title='Price List'
				>
					<PriceList width={20} height={20} fill='white' />
				</Link>
				<Link
					className={`${pathname === '/co_workers' ? `${size.width <= 767 && styles.linkActive}` : ''} ${size.width >= 767 ? styles.btn_co_worker : styles.nav__link}`}
					href='/co_workers'
					title='Co Worker'
				>
					<CoWorkers width={25} height={20} fill='white' />
				</Link>
				<Link
					className={`${size.width >= 767 ? styles.btn_contact_us : styles.nav__link}`}
					href='tel:+37477111111'
					title='Contact us'
				>
					<Contact width={20} height={20} fill='white' />
				</Link>
			</div>
		</div>
	);
};

export default MenuSettings;
