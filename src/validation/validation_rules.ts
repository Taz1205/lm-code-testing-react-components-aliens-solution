// 💡 Let's make all our validation functions have this pattern:
//		If the input is invalid, return an error message
//		If the input is valid, return undefined
export type ValidationFunction = (value: string) => string | undefined;

// 💡 Each of the rules below is a function which returns a ValidationFunction
//		This means each rule can be re-used for different inputs.
//		So one input can have maxLength(17) and another can have maxLength(23)
//		These rules act as "factories" for the actual ValidationFunctions each input uses.

export const maxLength = (max: number) => {
	return (value: string) =>
		value.length <= max
			? undefined
			: `Must be shorter than ${max} characters.`;
};

export const minLength = (min: number) => {
	return (value: string) =>
		min <= value.length
			? undefined
			: `Must be longer than ${min} characters.`;
};

export const noNumbers = () => {
	const numbers = /[0-9]/;
	return (value: string) =>
		numbers.test(value) ? `No numbers allowed.` : undefined;
};

export const noSpecialChars = () => {
	const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
	return (value: string) =>
		specialChars.test(value) ? `No special characters allowed.` : undefined;
};

// https://stackoverflow.com/posts/175787/revisions
function isNumeric(value: string) {
	if (typeof value !== 'string') return false;
	return !isNaN(+value) && !isNaN(parseFloat(value));
}

export const mustBeNumeric = () => {
	return (value: string) =>
		isNumeric(value) ? undefined : 'Must be a number.';
};

export const minValue = (min: number) => {
	return (value: string) => {
		if (isNumeric(value)) {
			const num = Number.parseInt(value);
			return num >= min ? undefined : `Must be at least ${min}`;
		}
		return `Not a valid integer.`;
	};
};

export const mustNotBeNull = () => {
	return (value: string) => {
		return value === null || value === undefined
			? `Must not be null.`
			: undefined;
	};
};

export const mustEqual = (desiredValue: string) => {
	return (value: string) => {
		return value === desiredValue
			? undefined
			: `Must equal "${desiredValue}"`;
	};
};
