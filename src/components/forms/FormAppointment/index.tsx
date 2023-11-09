import React, { useState, FormEvent } from 'react';

import styles from './FormAppointment.module.sass';
import cn from 'classnames';

import InputField from '@/components/ui/InputField';
import InputNumber from '@/components/ui/InputNumber';
import TextareaField from '@/components/ui/TextareaField';

import Facebook from '../../icons/Facebook';
import Instagram from '../../icons/Instagram';
import Google from '../../icons/Google';

import Link from 'next/link';

import { Hosts } from '@/constants/constants';

interface Props {
	className?: string,
};

const initValues = { name: '', email: '', phone: '', subject: '' };
const initState = { isLoading: false, error: '', values: initValues };

const FormAppointment: React.FC<Props> = ({ className }) => {
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
			name: initState.values.name,
			email: initState.values.email,
			phone: `${initState.values.phone}
				Message - ${'hello !!!!!!!!!!!!'}`
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

	return (
		<form
			className={cn(className, styles.box)}
			onSubmit={handleSubmit}
		>
			<div className={styles.contact_us_header}>
				<h1 className={styles.title}>Contact Us</h1>
				<div>
					<Link href={Hosts.facebook} aria-label='Facebook' className={styles.icon} target="_blank">
						<Facebook
							width='23'
							height='23'
							fill='#111111'
						/>
					</Link>
					<Link href={Hosts.instagram} aria-label='Instagram' className={styles.icon} target="_blank">
						<Instagram
							width='23'
							height='23'
							fill='#111111'
						/>
					</Link>
					<Link href={Hosts.google} aria-label='Google' className={styles.icon} target="_blank">
						<Google
							width='23'
							height='23'
							fill='#111111'
						/>
					</Link>
				</div>
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
					name='subject'
					placeholder='Messages'
					requiredField={false}
					value={values.subject}
					onChange={handleChange}
				/>
			</div>
			<button className={styles.submit}>Send</button>
		</form>
	);
};

export default FormAppointment;