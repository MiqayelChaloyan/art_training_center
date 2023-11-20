import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import AccordionArrow from '../../../icons/AccordionArrow';
import { urlFor } from '../../../../../sanity/sanity';

import styles from './style.module.sass';

function daysBetweenDates(dateStr1: any, dateStr2: any) {
    const startDate = new Date(dateStr1);
    const endDate = new Date(dateStr2);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference;
};

type Props = {
    name: string;
    list: any;
    svg: string;
    alt: string | undefined;
    activeTab: boolean;
    index: boolean;
    activateTab: () => void;
}

const Panel: FC<Props> = ({ name, list, svg, alt, activeTab, index, activateTab }) => {
    const [height, setHeight] = useState(0);

    const innerStyle = {
        height: `${activeTab === index ? height : 0}px`,
    };

    const handlePanelMount = () => {
        const panelHeight = 300;
        setHeight(panelHeight);
    };

    useEffect(() => {
        handlePanelMount();
    }, []);

    const table = list && list.map((item: any) => {
        const result = daysBetweenDates(item.startDate, item.endDate);
        return (
            <table key={item._key}>
                <thead>
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.amount} AMD</td>
                        <td>{result} days</td>
                        <td>{item.duration} hour</td>
                    </tr>
                </thead>
            </table>
        );
    });

    const urlForSvg = urlFor(svg)
        .auto('format')
        .fit('max')
        .url();

    return (
        <div
            className={styles.panel}
            role='tabpanel'
            aria-expanded={activeTab === index}
            id={`panel-${index}`}
        >
            <div className={styles.panel_box}>
                <div className={styles.column}>
                    <p className={styles.panel__label} role='tab'>
                        {name}
                    </p>
                    <button onClick={activateTab} style={{ transform: activeTab !== index ? 'rotate(178deg)' : 'rotate(0deg)' }}>
                        <AccordionArrow width={50} height={50} fill='white' />
                    </button>
                </div>
                <div>
                    <Image
                        src={urlForSvg}
                        alt={alt || 'Svg'}
                        priority
                        className={styles.svg_icon}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className={styles.panel__inner} style={innerStyle} aria-hidden={!activeTab === index}>
                <div className={styles.panel__content}>{table}</div>
            </div>
        </div>
    );
};


export default Panel;