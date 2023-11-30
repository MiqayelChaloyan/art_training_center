import { memo, useEffect, useState } from 'react';

import styles from './style.module.sass';

const ProgressBar = ({ value = 0, quantity }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        if (percent < quantity) {
            setTimeout(() => setPercent(newval => newval + 1), 60);
        }
    }, [percent]);

    return <p className={styles.percent}>{percent}</p>;
};

export default memo(ProgressBar);