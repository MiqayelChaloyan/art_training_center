import React, { useState, useEffect } from 'react';

import styles from './Modal.module.sass';
import cn from 'classnames';

import { useAppSelector, useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';


interface Props {
	children: React.ReactElement
}

const SectionCareerServices: React.FC<Props> = ({ children }) => {

	const isOpen = useAppSelector((state) => state.stateModal.isOpen);
	const dispatch = useAppDispatch();

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (isOpen) {
			const timerId = setTimeout(() => setShowModal(true), 1);
			return () => clearTimeout(timerId);
		} else {
			setShowModal(false);
		}
	}, [isOpen]);

	return (
		<div className={cn(styles.box, `${isOpen ? styles.boxOpen : ''}`)}>
			<div className={styles.wrap}>
				<div
					className={cn(styles.overlay, { [styles.overlayShow]: showModal })}
					onClick={() => {
						setShowModal(false);
						setTimeout(() => dispatch(closeModal()), 500);
					}}
				></div>
				<div className={cn(styles.content, { [styles.contentShow]: showModal })}>
					<button className={styles.close}
						title='Close'
						onClick={() => {
							setShowModal(false);
							setTimeout(() => dispatch(closeModal()), 500);
						}}>
						X
					</button>
					{React.cloneElement(children, { setShowModal })}
				</div>
			</div>
		</div>
	);
};

export default SectionCareerServices;