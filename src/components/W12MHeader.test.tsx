import { render, screen } from '@testing-library/react';
import W12MHeader, { W12M_HEADER_TEXT } from './W12MHeader';

test('renders header text', () => {
	render(<W12MHeader />);
	const someHeaderText = screen.getByText(W12M_HEADER_TEXT);
	expect(someHeaderText).toBeInTheDocument();
});
