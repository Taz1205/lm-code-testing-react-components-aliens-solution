import { useState } from 'react';
import {
	validateNumberOfBeings,
	validatePlanetName,
	validateReasonForSparing,
	validateSpeciesName,
	validateTwoPlusTwo,
} from '../validation/validate_w12_form';
import { DisplayW12Form } from './DisplayW12Form';
import { SelectInput } from './inputs/Select';
import { TextInput } from './inputs/TextInput';
import { W12FormChangeHandler, W12MFormData } from './W12MForm.types';
import W12MHeader from './W12MHeader';

const defaultFormData: W12MFormData = {
	speciesName: '',
	planetName: '',
	numberOfBeings: null,
	reasonForSparing: '',
	twoPlusTwo: 'NOT_SELECTED',
};

const W12MForm = () => {
	const [formData, setFormData] = useState<W12MFormData>(defaultFormData);

	const [submitted, setSubmitted] = useState(false);

	const onChangeHandler: W12FormChangeHandler = <
		TKey extends keyof W12MFormData,
		TValue extends W12MFormData[TKey]
	>(
		value: TValue,
		name: TKey
	) => {
		setSubmitted(false);
		const newData: W12MFormData = { ...formData };
		newData[name] = value;
		setFormData(newData);
	};

	return (
		<>
			<form
				data-testid='W12MForm'
				onSubmit={(e) => {
					e.preventDefault();
					setSubmitted(true);
				}}>
				<W12MHeader />
				<TextInput
					id='speciesName'
					type='text'
					name='speciesName'
					value={formData.speciesName}
					placeholder='Enter Species Name'
					label='Species Name'
					validate={validateSpeciesName}
					onChangeHandler={onChangeHandler}
				/>
				<hr />
				<TextInput
					id='planetName'
					type='text'
					name='planetName'
					value={formData.planetName}
					placeholder='Enter Planet Name'
					label='Planet Name'
					validate={validatePlanetName}
					onChangeHandler={onChangeHandler}
				/>
				<hr />
				<TextInput
					id='numberOfBeings'
					type='text'
					name='numberOfBeings'
					value={(formData.numberOfBeings ?? '').toString()}
					placeholder='Enter Number of Beings'
					label='Number of Beings'
					validate={validateNumberOfBeings}
					onChangeHandler={onChangeHandler}
				/>
				<hr />
				<SelectInput
					id='twoPlusTwo'
					name='twoPlusTwo'
					value={formData.twoPlusTwo ?? ''}
					label='What is 2+2?'
					validate={validateTwoPlusTwo}
					onChangeHandler={onChangeHandler}
					options={[
						{ value: 'NOT_SELECTED', display: '-' },
						{ value: '4', display: '4' },
						{ value: 'Not 4', display: 'Not 4' },
					]}
				/>
				<hr />
				<TextInput
					id='reasonForSparing'
					type='textarea'
					name='reasonForSparing'
					value={formData.reasonForSparing}
					placeholder='Enter Reason for Sparing'
					label='Reason for Sparing'
					validate={validateReasonForSparing}
					onChangeHandler={onChangeHandler}
				/>
				<hr />
				<button type='submit'>Submit</button>
				<hr />
			</form>
			{submitted && <DisplayW12Form form={formData} />}
		</>
	);
};

export default W12MForm;
