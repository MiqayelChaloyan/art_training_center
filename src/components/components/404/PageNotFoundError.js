import Link from 'next/link';
import styles from './style.module.sass';

const PageNotFoundError = () => {
    return (
            <div className={styles.box}>
                <img className={styles.img} src="/gif/not-found.gif" alt="error-404" />
                <h1 className={styles.title}>Oups!</h1>
                <p className={styles.warning}>
                    We can’t find the page you are looking for.
                    Here are some helpful links instead.
                </p>
                <Link href='/' className={styles.goBack}>Go back</Link>
            </div>
    );
};

export default PageNotFoundError;