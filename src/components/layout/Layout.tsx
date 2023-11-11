import React from 'react';

import Meta from '@/components/seo/Meta';
import Modal from '@/components/layout/Modal/';

import Header from './Header';
import Footer from './Footer';

import CoursesModal from '../courses';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
}

const Layout: React.FC<LayoutProps> = ({ children, headerPosition }) => {
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
				<CoursesModal />
			</Modal>
		</Meta>
	);
};

export default Layout;
