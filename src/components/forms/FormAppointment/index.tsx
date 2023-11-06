import React, { useState, FormEvent } from 'react';

import styles from './FormAppointment.module.sass';
import cn from 'classnames';

import InputField from '@/components/ui/InputField';
import InputNumber from '@/components/ui/InputNumber';
import TextareaField from '@/components/ui/TextareaField';

import CONFIG from '@/constants/config';

interface Props {
	className?: string,
}

const FormAppointment: React.FC<Props> = ({ className }) => {
	
	const [inputNameValue, setInputNameValue] = useState('');
	const [inputEmailValue, setInputEmailValue] = useState('');
	const [inputPhoneValue, setInputPhoneValue] = useState('');
	const [textareaMessagesValue, setTextareaMessagesValue] = useState('');

	const [formSubmitted, setFormSubmitted] = useState(false);

	const inputNameChange = (value: string) => {
		setInputNameValue(value);
	};

    const inputEmailChange = (value: string) => {
		setInputEmailValue(value);
	};
	
	const inputPhoneChange = (value: string) => {
		setInputPhoneValue(value);
	};
	const textareaMessagesChange = (value: string) => {
		setTextareaMessagesValue(value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = {
			name: inputNameValue,
			email: inputEmailValue,
			phone: `${inputPhoneValue}
				Message - ${textareaMessagesValue}`
		};

		try {
			await fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify({
					...formData,
					accessKey: CONFIG.accessKey,
				}),
				headers: { 'Content-Type': 'application/json' },
			});
			console.log('Form submitted successfully!');
			setInputNameValue('');
            setInputEmailValue('');
			setInputPhoneValue('');
			setTextareaMessagesValue('');
			setFormSubmitted(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			className={cn(className, styles.box)}
			onSubmit={handleSubmit}
		>
			<h1 className={styles.title}>Contact Us</h1>
			<div className={styles.fields}>
				<InputField
					className={cn(styles.input)}
					type='name'
					placeholder='Your Name'
					requiredField={true}
					value={inputNameValue}
					onChange={inputNameChange}
				/>
                <InputField
					className={cn(styles.input)}
					type='email'
					placeholder='Your Email'
					requiredField={true}
					value={inputEmailValue}
					onChange={inputEmailChange}
				/>
				<InputNumber
					className={cn(styles.input)}
					type='phone'
					placeholder='Phone Number'
					maskNumber='+374 99 99 99 99'
					requiredField={true}
					value={inputPhoneValue}
					onChange={inputPhoneChange}
				/>
				<TextareaField
					className={cn(styles.textarea)}
					placeholder='Messages'
					requiredField={true}
					value={textareaMessagesValue}
					onChange={textareaMessagesChange}
				/>
			</div>
			<button className={styles.submit}>Send</button>
		</form>
	);
};

export default FormAppointment;