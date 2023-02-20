export type TwoPlusTwo = 'NOT_SELECTED' | '4' | 'Not 4';

export type W12MFormData = {
	speciesName: string;
	planetName: string;
	numberOfBeings: null | number;
	reasonForSparing: string;
	twoPlusTwo: TwoPlusTwo;
};

export type W12FormChangeHandler = <
	TKey extends keyof W12MFormData,
	TValue extends W12MFormData[TKey]
>(
	value: TValue,
	name: TKey
) => void;
