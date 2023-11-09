import React, { FC, ChangeEvent } from 'react';

interface InputProps {
	name?: string
	className?: string
	placeholder?: string
	requiredField?: boolean
	value: string
	onChange: (value: string) => void
}

const TextareaField: FC<InputProps> = ({ className, name, placeholder, requiredField, value, onChange }) => {
	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event.target.value);
	};

	return (
		<textarea
			name={name}
			className={className}
			placeholder={placeholder}
			value={value}
			onChange={handleInputChange}
			required={requiredField}
		/>
	);
};

export default TextareaField;