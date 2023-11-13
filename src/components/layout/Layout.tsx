import React, { useEffect, useState } from 'react';

import Meta from '@/components/seo/Meta';
import Modal from '@/components/layout/Modal/';

import Header from './Header';
import Footer from './Footer';

import CoursesModal from '../courses';
import { getCourses } from '../../../sanity/services/courses.service';
import { Courses } from '../../../sanity/sanity-queries/courses';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
}

const Layout: React.FC<LayoutProps> = ({ children, headerPosition }) => {
	const [courses, setCourses] = useState<Courses[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getCourses();
			setCourses(data);
		};

		fetchData();
	}, []);

	return (
		<Meta>
			<div className="wrapper">
				<div className="wrapper-content">
					<Header typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
					<main className="wrapper-main">{children}</main>
				</div>
				<Footer />
			</div>
			<Modal>
				<CoursesModal courses={courses} />
			</Modal>
		</Meta>
	);
};

export default Layout;
