import React from 'react';

import Meta from '@/components/seo/Meta';
import Header from './Header';
import Footer from './Footer';

// import MenuSettings from '@/components/layout/MenuSettings/MenuSettings';
// import Header from '@/components/layout/Header/Header';
// import Footer from '@/components/layout/Footer/Footer';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
}

const Layout: React.FC<LayoutProps> = ({ children, headerPosition }) => {
	return (
		<Meta>
			<div className="wrapper">
				{/* <MenuSettings /> */}
				<div className="wrapper-content">
					<Header typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
					<main className="wrapper-main">{children}</main>
				</div>
				<Footer/>
			</div>
			{/* <Modal>
					<FormAppointment />
				</Modal> */}
		</Meta>
	);
};

export default Layout;
