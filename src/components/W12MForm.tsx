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

// Note that there's not actually a lot of code here - it looks like more than it is thanks to
// all the comments!

const W12MForm = () => {
	// 💡 We use a single object for all of our form data
	const [formData, setFormData] = useState<W12MFormData>(defaultFormData);

	// 💡 We also use a single onChangeHandler for EVERY input
	// Don't be put off by the complex-looking generic below, look at the code first and we'll
	// figure it out!
	const onChangeHandler: W12FormChangeHandler = <
		TKey extends keyof W12MFormData,
		TValue extends W12MFormData[TKey]
	>(
		value: TValue,
		name: TKey
	) => {
		setSubmitted(false);
		// 💡 We copy the old state
		const newData: W12MFormData = { ...formData };

		// 💡 Then we update the value for the named property. This is the line that requires
		//    the complex-looking generic!
		newData[name] = value;

		//    	Let's understand the generic now! TypeScript needs to be sure that
		//    	the set value is allowed to go in that property.

		//    	1️⃣ This means that we need to know that `name` is a valid property on the form
		//    	(so we can't do newData["banana"] because that's not a thing)
		//    	👉 i.e. TKey must be a "keyof W12MFormData"

		//		2️⃣ Secondly, the value must be allowed to go into that property
		//			So we can't do newData["numberOfBeings"] = "agreiogjhoeag"
		//		👉 i.e. TValue must be the type of W12MFormData which corresponds to the key
		//			hence "TValue extends W12MFormData[TKey]"

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
