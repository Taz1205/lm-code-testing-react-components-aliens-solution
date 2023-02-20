import { render, screen } from '@testing-library/react';
import { DisplayW12Form } from './DisplayW12Form';
import { W12MFormData } from './W12MForm.types';

describe('<DisplayW12Form>', () => {
	it('renders all provided data', () => {
		const form: W12MFormData = {
			speciesName: 'agiroejgiorej',
			planetName: '34uyhain',
			numberOfBeings: 328978,
			twoPlusTwo: '4',
			reasonForSparing: 'eiohguirehuigihe',
		};

		render(<DisplayW12Form form={form} />);

		expect(screen.getByText('👉 ' + form.speciesName)).toBeInTheDocument();
		expect(screen.getByText('👉 ' + form.planetName)).toBeInTheDocument();
		expect(
			screen.getByText('👉 ' + (form.numberOfBeings ?? '').toString())
		).toBeInTheDocument();
		expect(screen.getByText('👉 ' + form.twoPlusTwo)).toBeInTheDocument();
		expect(
			screen.getByText('👉 ' + form.reasonForSparing)
		).toBeInTheDocument();
	});
});
