import React, { FC, ChangeEvent } from 'react';

import InputMask from 'react-input-mask';

interface InputProps {
	className?: string
	type: string
	placeholder?: string
	maskNumber: string | (string | RegExp)[]
	requiredField?: boolean
	value: string
	onChange: (value: string) => void
}

const InputNumber: FC<InputProps> = ({ className, type, placeholder, maskNumber, requiredField, value, onChange }) => {

	return (
		<InputMask
			className={className}
			type={type}
			placeholder={placeholder}
			mask={maskNumber}
			value={value}
			onChange={(e: { target: { value: string; }; }) => onChange(e.target.value)}
			required={requiredField}
		/>
	);
};

export default InputNumber;