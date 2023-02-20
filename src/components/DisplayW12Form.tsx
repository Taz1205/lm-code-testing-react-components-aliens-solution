import { W12MFormData } from './W12MForm.types';

export const DisplayW12Form: React.FC<{ form: W12MFormData }> = ({ form }) => (
	<div>
		<div>
			<strong>Species: </strong> <span>👉 {form.speciesName}</span>
		</div>
		<div>
			<strong>Planet: </strong> <span>👉 {form.planetName}</span>
		</div>
		<div>
			<strong>Number of Beings: </strong>
			<span>👉 {form.numberOfBeings}</span>
		</div>
		<div>
			<strong>Two plus Two: </strong>
			<span>👉 {form.twoPlusTwo}</span>
		</div>
		<div>
			<strong>Reason for Sparing: </strong>
			<span>👉 {form.reasonForSparing}</span>
		</div>
	</div>
);
