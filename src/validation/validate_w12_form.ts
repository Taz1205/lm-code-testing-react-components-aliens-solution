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
} from './validation_rules';

/* 

💡 	Our validation functions are composed of smaller validation rules
	This way we only have to write the actual logic ONCE, and we can test all those rules separately,
	as seen in `validation_rules.ts` and `validation_rules.test.ts`

	We could unit test these functions too, just checking that they return arrays with the required specification.

	However, given how simple this API is, it seems valid to just SEE visually that the rules
	as written for each input correspond perfectly the the specification. We've made our code match
	the spec.

	This design also allows us to easily change the associated constants or mix/match rules on
	future components - each time we write a new rule, that makes all future inputs more powerful
	as they can opt into using that rule.

*/

export const validateSpeciesName: (value: string) => string[] = (value) => {
	const rules = [
		minLength(SPECIES_NAME_MIN_LENGTH),
		maxLength(SPECIES_NAME_MAX_LENGTH),
		noNumbers(),
		noSpecialChars(),
	];

	return rules
		.map((r) => r(value))
		.filter((v) => v !== undefined) as string[];
};

export const validatePlanetName: (value: string) => string[] = (value) => {
	const rules = [
		minLength(PLANET_NAME_MIN_LENGTH),
		maxLength(PLANET_NAME_MAX_LENGTH),
		noSpecialChars(),
	];

	return rules
		.map((r) => r(value))
		.filter((v) => v !== undefined) as string[];
};

export const validateReasonForSparing: (value: string) => string[] = (
	value
) => {
	const rules = [
		minLength(REASON_SPARING_MIN_LENGTH),
		maxLength(REASON_SPARING_MAX_LENGTH),
		noSpecialChars(),
	];

	return rules
		.map((r) => r(value))
		.filter((v) => v !== undefined) as string[];
};

export const validateNumberOfBeings: (value: string) => string[] = (value) => {
	const rules = [mustBeNumeric(), minValue(NUMBER_OF_BEINGS_MIN_SIZE)];

	return rules
		.map((r) => r(value))
		.filter((v) => v !== undefined) as string[];
};

export const validateTwoPlusTwo: (value: string) => string[] = (value) => {
	const rules = [mustNotBeNull(), mustEqual('4')];

	return rules
		.map((r) => r(value))
		.filter((v) => v !== undefined) as string[];
};
