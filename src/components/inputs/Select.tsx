import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import {
	TwoPlusTwo,
	W12MFormChangeHandler,
	W12MFormData,
} from '../W12MForm.types';

// At the moment we only have one <Select> so we can be more restrictive here.
// If we wanted to reuse this component for other dropdowns (which we probably would!)
// we'd have to loosen the type of "value" to "string". For now it seems fine to be a little
// more specific.
type Option = { display: string; value: TwoPlusTwo };

// very similar to the <TextInput> props - see comments there.
export interface SelectProps {
	id: string;
	name: keyof W12MFormData;
	options: Option[];
	label: string;
	value: string;
	onChangeHandler: W12MFormChangeHandler;
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
