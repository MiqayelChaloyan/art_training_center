import React from 'react';

import styles from './Footer.module.sass';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <div>
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