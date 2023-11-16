import React, { useState } from 'react';
import Panel from '../AccordionItem';
import styles from './style.module.sass';

const Accordion = ({ course }: any) => {
    const [activeTab, setActiveTab] = useState(0);

    const activateTab = (index: number) => {
        setActiveTab((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className={styles.accordion} role='tablist'>
            {course.map((panel: any, index: number) => (
                <Panel
                    key={index}
                    activeTab={activeTab}
                    index={index}
                    {...panel}
                    name={panel.name}
                    svg={panel.svg}
                    list={panel.price_list}
                    activateTab={() => activateTab(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
