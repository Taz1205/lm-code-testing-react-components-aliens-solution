import {
	NUMBER_OF_BEINGS_MIN_SIZE,
	PLANET_NAME_MAX_LENGTH,
	PLANET_NAME_MIN_LENGTH,
	REASON_SPARING_MAX_LENGTH,
	REASON_SPARING_MIN_LENGTH,
	SPECIES_NAME_MAX_LENGTH,
	SPECIES_NAME_MIN_LENGTH,
} from './validation_constants';
import {
	maxLength,
	minLength,
	minValue,
	mustBeNumeric,
	mustEqual,
	mustNotBeNull,
	noNumbers,
	noSpecialChars,
	ValidationFunction,
} from './validation_rules';

/* 

💡 	Our validation functions are composed of an array of smaller validation rules.
	
	This way we only have to write the actual logic ONCE. See `validation_rules.ts` and `validation_rules.test.ts`

	With this design, it's easy to visually see that the code matches the spec for each input.

	This design also allows us to easily change the associated constants or mix/match rules on
	future components - each time we add a new rule, all inputs become more powerful
	as they can opt into using that rule.

*/

// 💡 Notice how it's extremely obvious what this function says about speciesName
//    If the requirements change, we just have to edit the "rules" array!
export const validateSpeciesName: (value: string) => string[] = (value) => {
	const rules = [
		minLength(SPECIES_NAME_MIN_LENGTH),
		maxLength(SPECIES_NAME_MAX_LENGTH),
		noNumbers(),
		noSpecialChars(),
	];

	return apply(rules, value);
};

export const validatePlanetName: (value: string) => string[] = (value) => {
	const rules = [
		minLength(PLANET_NAME_MIN_LENGTH),
		maxLength(PLANET_NAME_MAX_LENGTH),
		noSpecialChars(),
	];

	return apply(rules, value);
};

export const validateReasonForSparing: (value: string) => string[] = (
	value
) => {
	const rules = [
		minLength(REASON_SPARING_MIN_LENGTH),
		maxLength(REASON_SPARING_MAX_LENGTH),
		noSpecialChars(),
	];

	return apply(rules, value);
};

export const validateNumberOfBeings: (value: string) => string[] = (value) => {
	const rules = [mustBeNumeric(), minValue(NUMBER_OF_BEINGS_MIN_SIZE)];

	return apply(rules, value);
};

export const validateTwoPlusTwo: (value: string) => string[] = (value) => {
	const rules = [mustNotBeNull(), mustEqual('4')];

	return apply(rules, value);
};

// 💡 This is just a convenience function to apply all of the rules
const apply = (rules: ValidationFunction[], value: string) => {
	return (
		rules
			// this passes the value to each rule and builds an array of the results
			.map((r) => r(value))
			// then we filter out any "undefined", i.e. we only keep any error messages
			.filter(Boolean) as string[]
	);
	// because of the wobbly definition of .filter() we end up with an array of "any" 😔
	// but we KNOW it's string[], so we use "as string[]" to retain the type information 🥳
};
