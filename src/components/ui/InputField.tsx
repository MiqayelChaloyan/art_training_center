import React, { FC, ChangeEvent } from 'react';

interface InputProps {
	className?: string
	type: string
	placeholder?: string
	requiredField?: boolean
	value: string
	onChange: (value: string) => void
}

const InputField: FC<InputProps> = ({ className, type, placeholder, requiredField, value, onChange }) => {
	
	return (
		<input
			className={className}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			required={requiredField}
		/>
	);
};

export default InputField;