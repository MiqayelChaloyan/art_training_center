import styles from './style.module.sass';

export const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrow_prev}`}
            style={{ ...style, display: 'block', width: 50, height: 50 }}
            onClick={onClick}
        />
    );
};