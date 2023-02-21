import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import { W12MFormChangeHandler, W12MFormData } from '../W12MForm.types';

export interface TextInputProps {
	id: string;

	// 💡 "keyof" operator means the type must be a known property on a particular type
	// this lets us use the "name" prop to update our state object,
	// as the "name" is guaranteed to exist as a key on our W12MFormData
	name: keyof W12MFormData;

	type: 'text' | 'textarea';
	label: string;
	placeholder?: string;
	value: string;

	// we can use the exact same "onChange" function for all inputs
	// with a little type wizardry 🧙‍♂️. See the definition of the below type for details!
	onChangeHandler: W12MFormChangeHandler;

	// returning a string[] from our validation function
	// allows us to show multiple SPECIFIC validation messages
	validate: (value: string) => string[];
}

// 💡 NOTICE there is zero form-specific code here! This input doesn't know or care about
//    Species or Planet or anything like that - we define all of that in the form.
export const TextInput: React.FC<TextInputProps> = ({
	id,
	name,
	type,
	label,
	placeholder,
	onChangeHandler,
	value,
	validate,
}) => {
	const [touched, setTouched] = useState(false);

	const validationErrors = validate(value);

	return (
		<>
			<div>
				<label htmlFor={name}>{label}: </label>
				{type === 'textarea' && (
					<textarea
						id={id}
						name={name}
						value={value}
						placeholder={placeholder}
						onChange={(e) => {
							setTouched(true);
							onChangeHandler(e.target.value, name);
						}}
					/>
				)}
				{type === 'text' && (
					<input
						id={id}
						name={name}
						placeholder={placeholder}
						type={type}
						value={value}
						onChange={(e) => {
							setTouched(true);
							onChangeHandler(e.target.value, name);
						}}
					/>
				)}
			</div>
			{touched && (
				<ErrorMessage name={name} messages={validationErrors} />
			)}
		</>
	);
};
