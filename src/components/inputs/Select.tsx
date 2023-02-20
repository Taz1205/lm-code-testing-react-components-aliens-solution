import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import {
	TwoPlusTwo,
	W12FormChangeHandler,
	W12MFormData,
} from '../W12MForm.types';

type Option = { display: string; value: TwoPlusTwo };

export interface SelectProps {
	id: string;
	name: keyof W12MFormData;
	options: Option[];
	label: string;
	value: string;
	onChangeHandler: W12FormChangeHandler;
	validate: (value: string) => string[];
}

export const SelectInput: React.FC<SelectProps> = ({
	id,
	name,
	options,
	label,
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
				<select
					id={id}
					value={value}
					onChange={(e) => {
						setTouched(true);
						onChangeHandler(e.target.value, name);
					}}>
					{options.map((o, index) => (
						<option
							key={`select-${name}-o-${index}`}
							value={o.value}>
							{o.display}
						</option>
					))}
				</select>
			</div>
			{touched && (
				<ErrorMessage name={name} messages={validationErrors} />
			)}
		</>
	);
};
