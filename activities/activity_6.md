# Activity 6 - Testing our validation

Our components already have `.test.tsx` files. Now we just need to make sure we're also testing the validation logic too.

Remember how to pass props to a component in tests? Here's an example we looked at elsewhere:

```TSX
	it(`Given the required props,
		When the component is rendered,
		Then the appointment description should be present`, () => {
		const requiredProps : AppointmentProps = {
		id: 1,
		name: 'Harriet',
		description: 'A very special appointment',
		date: '3 Nov',
		confirmed: false,
		onConfirmed: () => {},
		};

    	render(<Appointment {...requiredProps} />);

    	expect(
    		screen.getByText('A very special appointment')
    	).toBeInTheDocument();
    });
```

Your task now is to:

👉 Add a test to each input component to test for NO error message when valid data is entered, i.e. when the value is set to something within the rules

👉 Add (multiple if necessary) tests to each input component to test that the right error message is shown for each type of rule break.

Reminder of the validation rules:

-   **Species Name**: Must be between 3 and 23 characters. No numbers or special characters allowed!

-   **Planet Name**: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.

-   **Number of beings**: Numbers ONLY. Must be at least 1,000,000,000.

-   **What is 2 + 2**: "4" must be selected. Selecting "Not 4" should display an error.

-   **Reason for sparing**: Must be between 17 and 153 characters.

👉 Write all of your tests and check they work for the above rules!

So, for example, there might be a test that passes correct props to Species Name:

```TSX
const validSpeciesName : SpeciesNameProps = { speciesName: 'Human', /* other props here*/ };
	render(<SpeciesName {...validSpeciesName} />);
		expect(
    		screen.getByText('ERROR')
    	).not.toBeInTheDocument();
```

And if we write another test that passes `'iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio'` as a species name, we would `expect` an error message such as `ERROR - Species Name must be less than 23 characters` to be in the document.

And so on...

👉 Now if you run `npm test` you should get confirmation that all of your components are validating correctly in all possible circumstances.

The Earth is saved! 🌍💃🕺🥳 Have a well-deserved break. ☕

Form validation can get very complex, and there are many ways to approach it. I'm sure that if you made it this far you can see some of the drawbacks of this approach!

If you're feeling brave, you can take things just a little further with some extensions in [Activity 7 - This Time It's A Bit Harder](./activity_7_extension.md)
