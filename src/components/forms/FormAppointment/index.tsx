import React, { useState, FormEvent, useEffect } from 'react';

import cn from 'classnames';

import InputField from '@/components/ui/InputField';
import InputNumber from '@/components/ui/InputNumber';
import TextareaField from '@/components/ui/TextareaField';

import styles from './FormAppointment.module.sass';

interface Props {
	className?: string,
	width?: string
	children: React.ReactNode
};

const initValues = { name: '', email: '', phone: '', message: '' };
const initState = { isLoading: false, error: '', values: initValues };

const FormAppointment: React.FC<Props> = ({ className, width, children }) => {
	const [state, setState] = useState(initState);
	const { values, isLoading, error } = state;

	const handleChange = ({ target }: any) =>
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}));

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = {
			name: state.values.name,
			email: state.values.email,
			phone: state.values.phone,
			message: `${state.values.message}`
		};

		try {
			setState((prev) => ({
				...prev,
				isLoading: true,
			}));
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const { error } = await res.json();
			if (error) {
				console.log('Error !!');
				return;
			};
			console.log('Form submitted successfully!');
			setState(() => ({
				...initState,
				isLoading: false,
				error: error.message,
			}));
		} catch (error: any) {
			console.log(error);
			setState((prev) => ({
				...prev,
				isLoading: false,
				error: error.message,
			}));
		}
	};

	useEffect(() => console.log(state.isLoading), [state.isLoading]);

	return (
		<form
			className={cn(className, styles.box)}
			onSubmit={handleSubmit}
		>
			<div className={styles.contact_us_header}>
				{children}
			</div>
			<div className={styles.fields}>
				<InputField
					className={cn(styles.input)}
					name='name'
					type='name'
					placeholder='Your Name'
					requiredField={true}
					value={values.name}
					onChange={handleChange}
				/>
				<InputField
					className={cn(styles.input)}
					name='email'
					type='email'
					placeholder='Your Email'
					requiredField={true}
					value={values.email}
					onChange={handleChange}
				/>
				<InputNumber
					className={cn(styles.input)}
					name='phone'
					type='phone'
					placeholder='Phone Number'
					maskNumber='+374 99 99 99 99'
					requiredField={true}
					value={values.phone}
					onChange={handleChange}
				/>
				<TextareaField
					className={cn(styles.textarea)}
					name='message'
					placeholder='Messages'
					requiredField={false}
					value={values.message}
					onChange={handleChange}
				/>
			</div>
			<button className={styles.submit} style={{ width }}>
				{isLoading ?
					'Loading...'
					:
					<span>
						Send
					</span>
				}
			</button>
		</form>
	);
};

export default FormAppointment;