import React, { useState } from 'react';
import Link from 'next/link';

import { useAppDispatch } from '@/hooks/useStore';
import { openModal } from '@/store/stateModalSlice';

import Home from '@/components/icons/Home';
import Courses from '@/components/icons/Courses';
import PriceList from '@/components/icons/PriceList';
import CoWorkers from '@/components/icons/CoWorkers';
import Contact from '@/components/icons/Contact';

import styles from './style.module.sass';

const MenuSettings = () => {
    const dispatch = useAppDispatch();

	return (
		<div className={styles.box}>
			<Link
				className={styles.btn_home}
				href='/'
				title ='Home'
			>
               <Home width={20} height={20} fill='white'/>
			</Link>
            <button
				className={styles.btn_courses}
				onClick={() =>  setTimeout(() => dispatch(openModal()), 500)}
				title ='Courses'
			>
                <Courses width={20} height={20} fill='white'/>
			</button>
			<Link
				className={styles.btn_price_list}
				href='/price_list'
				title ='Price List'
			>
                <PriceList width={20} height={20} fill='white'/>
			</Link>
            <Link
				className={styles.btn_co_worker}
				href='/co_workers'
				title ='Co Worker'
			>
                <CoWorkers width={25} height={20} fill='white'/>
			</Link>
            <Link
				className={styles.btn_contact_us}
				href='tel:+37477111111'
				title ='Contact us'
			>
                <Contact width={20} height={20} fill='white'/>
			</Link>
		</div>
	);
};

export default MenuSettings;
