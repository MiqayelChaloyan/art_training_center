import Layout from '@/components/layout/Layout';
import styles from './Error404.module.sass';

const Error404 = () => {
    return (
        <Layout title='Error'>
            <div className={styles.box}>
                <img className={styles.img} src="/gif/error-404.gif" alt="error-404" />
            </div>
        </Layout>
    );
};

export default Error404;