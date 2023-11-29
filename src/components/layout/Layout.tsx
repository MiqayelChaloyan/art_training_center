import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Meta from '@/components/seo/Meta';
import Modal from '@/components/layout/Modal/';

import Header from './Header';
import Footer from './Footer';

import CoursesModal from '../courses';
import { getCourses } from '../../../sanity/services/courses.service';
import { Courses } from '../../../sanity/sanity-queries/courses';
import MenuSettings from './MenuSettings';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
};

const Layout: React.FC<LayoutProps> = ({ children, headerPosition }) => {
	const [courses, setCourses] = useState<Courses[]>([]);
    const { i18n } = useTranslation();	

	useEffect(() => {
		const fetchData = async () => {
			const data = await getCourses(i18n.language);
			setCourses(data);
		};

		fetchData();
	}, [i18n.language]);

	return (
		<Meta>
			<div className="wrapper">
				<MenuSettings/>
				<div className="wrapper-content">
					<Header typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
					<main className="wrapper-main">{children}</main>
				</div>
				<Footer courses={courses}/>
			</div>
			<Modal>
				<CoursesModal courses={courses} />
			</Modal>
		</Meta>
	);
};

export default Layout;
