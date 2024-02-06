import styles from './style.module.sass';

export const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrow_next}`}
            style={{ ...style, display: 'block', width: 50, height: 50 }}
            onClick={onClick}
        />
    );
};
