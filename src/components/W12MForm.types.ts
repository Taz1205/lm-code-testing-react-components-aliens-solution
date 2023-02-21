export type TwoPlusTwo = 'NOT_SELECTED' | '4' | 'Not 4';

// Nothing overly suspicious here
export type W12MFormData = {
	speciesName: string;
	planetName: string;
	numberOfBeings: null | number;
	reasonForSparing: string;
	twoPlusTwo: TwoPlusTwo;
};

// 😱 This may look a bit scary...
// ... but it basically says that our onChange functions need a type parameter
//     "TKey" which must be a property that exists on W12MFormData (e.g. "speciesName")
//     Then we can use TKey to get the type that corresponds to that property for our "value"
//     So for "speciesName" the type of "value" will be a string
//     and for "twoPlusTwo" the type of "value" will be TwoPlusTwo 🥳
export type W12MFormChangeHandler = <TKey extends keyof W12MFormData>(
	value: W12MFormData[TKey],
	name: TKey
) => void;
