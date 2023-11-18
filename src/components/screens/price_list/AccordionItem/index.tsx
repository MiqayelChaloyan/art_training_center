import { useEffect, useState } from 'react';
import styles from './style.module.sass';
import AccordionArrow from '../../../icons/AccordionArrow';
import { generateImageUrl } from '@/utils/imageGenerate';

function daysBetweenDates(dateStr1: any, dateStr2: any) {
    const startDate = new Date(dateStr1);
    const endDate = new Date(dateStr2);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference;
};

const Panel = ({ name, list, svg, activeTab, index, activateTab }: any) => {
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
                    <button onClick={activateTab} style={{transform:  activeTab !== index ? 'rotate(178deg)': 'rotate(0deg)'}}>
                        <AccordionArrow width={50} height={50} fill='white' />
                    </button>
                </div>
                <div>
                    <img src={generateImageUrl(svg.asset._ref)} className={styles.svg_icon} />
                </div>
            </div>
            <div className={styles.panel__inner} style={innerStyle} aria-hidden={!activeTab === index}>
                <div className={styles.panel__content}>{table}</div>
            </div>
        </div>
    );
};


export default Panel;