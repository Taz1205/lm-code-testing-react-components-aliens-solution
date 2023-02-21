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
import { W12MFormChangeHandler, W12MFormData } from './W12MForm.types';
import W12MHeader from './W12MHeader';

const defaultFormData: W12MFormData = {
	speciesName: '',
	planetName: '',
	numberOfBeings: null,
	reasonForSparing: '',
	twoPlusTwo: 'NOT_SELECTED',
};

const W12MForm = () => {
	// 💡 We use a single object for all of our form data
	const [formData, setFormData] = useState<W12MFormData>(defaultFormData);

	// 💡 We also use a single onChangeHandler for EVERY input
	//     See the definition of W12
	const onChangeHandler: W12MFormChangeHandler = <
		TKey extends keyof W12MFormData
	>(
		value: W12MFormData[TKey],
		name: TKey
	) => {
		setSubmitted(false);
		// 💡 We copy the old state
		const newData: W12MFormData = { ...formData };

		// 💡 Then we update the value for the named property. This is the line that requires
		//    the complex-looking generic, as TypeScript needs to be sure that:
		//    	1) newData[name] actually corresponds to a real property
		//			(i.e. name must be a "keyof W12MFormData")
		//		2)	"value" is a valid type to go into that property,
		//			(i.e. the type of "value" must be W12MFormData[TKey] for that specific TKey)
		//
		newData[name] = value;

		// 💡 Finally we update state with the new value
		setFormData(newData);
	};

	const [submitted, setSubmitted] = useState(false);

	return (
		<>
			<form
				data-testid='W12MForm'
				onSubmit={(e) => {
					e.preventDefault();
					setSubmitted(true);
				}}>
				<W12MHeader />
				{/* 💡 Note how simple each input becomes to define! */}
				<TextInput
					id='speciesName'
					type='text'
					name='speciesName'
					value={formData.speciesName}
					placeholder='Enter Species Name'
					label='Species Name'
					// 💡 Be sure to check out the validation code to understand how this works!
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
