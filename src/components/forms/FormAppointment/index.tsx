import React, { useState, FormEvent } from 'react';

import { useTranslation } from 'react-i18next';

import cn from 'classnames';

import InputField from '@/components/ui/InputField';
import InputNumber from '@/components/ui/InputNumber';
import TextareaField from '@/components/ui/TextareaField';

import styles from './FormAppointment.module.sass';

interface Props {
	className?: string
	width?: string
	children: React.ReactNode
};

const initValues = { name: '', email: '', phone: '', message: '' };
const initState = { isLoading: false, error: '', values: initValues };

const FormAppointment: React.FC<Props> = ({ className, width, children }) => {
	const [state, setState] = useState<any>(initState);
	const { values, isLoading, error } = state;
    const { t } = useTranslation();

	const handleChange = ({ target }: any) =>
		setState((prev: any) => ({
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
			setState((prev: any) => ({
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
			setState((prev: any) => ({
				...prev,
				isLoading: false,
				error: error.message,
			}));
		}
	};

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
					placeholder={t('contact-us.name')}
					requiredField={true}
					value={values.name}
					onChange={handleChange}
				/>
				<InputField
					className={cn(styles.input)}
					name='email'
					type='email'
					placeholder={t('contact-us.email')}
					requiredField={true}
					value={values.email}
					onChange={handleChange}
				/>
				<InputNumber
					className={cn(styles.input)}
					name='phone'
					type='phone'
					placeholder={t('contact-us.phone-number')}
					maskNumber='+374 99 99 99 99'
					requiredField={true}
					value={values.phone}
					onChange={handleChange}
				/>
				<TextareaField
					className={cn(styles.textarea)}
					name='message'
					placeholder={t('contact-us.message')}
					requiredField={false}
					value={values.message}
					onChange={handleChange}
				/>
			</div>
			<button className={styles.submit} style={{ width }}>
				{isLoading ?
					`${t('contact-us.loading')}...`
					:
					<span>
						{t('contact-us.send')}
					</span>
				}
			</button>
		</form>
	);
};

export default FormAppointment;