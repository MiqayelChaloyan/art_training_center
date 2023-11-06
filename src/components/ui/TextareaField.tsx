import React, { FC, ChangeEvent } from 'react';

interface InputProps {
	className?: string
	placeholder?: string
	requiredField?: boolean
	value: string
	onChange: (value: string) => void
}

const TextareaField: FC<InputProps> = ({ className, placeholder, requiredField, value, onChange }) => {
	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event.target.value);
	};

	return (
		<textarea
			className={className}
			placeholder={placeholder}
			value={value}
			onChange={handleInputChange}
			required={requiredField}
		/>
	);
};

export default TextareaField;