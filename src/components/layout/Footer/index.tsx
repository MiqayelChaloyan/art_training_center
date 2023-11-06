import React from 'react';
import Link from 'next/link';

// import useTheme from '@/hooks/useTheme';

// import Logo from '@/components/icons/Logo';
// import Facebook from '@/components/icons/Facebook';
// import Linkedin from '@/components/icons/Linkedin';

// import CONFIG from '@/constants/config';

import styles from './Footer.module.sass';
// import cn from 'classnames';

const Footer = () => {
    // const { theme } = useTheme();

    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <div>
                        {/* <Link href="/" className={styles.logo} aria-label='DwinTech Logo'>
							<Logo width="200" height="69" fill={'#111111'} />
						</Link> */}
                        <p className={styles.title}>The Double-Win Choice in IT Outsourcing.</p>
                    </div>

                </div>
                <div>
                    <p className={styles.copyright}>© ART Training Center. 2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;