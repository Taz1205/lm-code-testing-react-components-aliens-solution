# Activity 5 - Hints

Let's imagine our Species Name field works like this:

```TSX
	const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => (
		<>
			<label for='speciesName'>Species Name</label>
			<input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />
		</>
	);
```

We need to add validation. So first, let's intercept the onChange event:

```TSX
	const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => (
		<>
			<label for='speciesName'>Species Name</label>
			<input id='speciesName' type='text' value={speciesName}
					onChange={(e) => { onChangeSpeciesName(e); } } />
		</>
	);
```

💡 This code does the **exact same thing** as the first snippet. It simply passes the change event back to the handler function in our form. However, we now have a place to add extra logic to our component in that function!

```TSX
	const SpeciesName  : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => (
		<>
			<label for='speciesName'>Species Name</label>
			<input id='speciesName' type='text' value={speciesName}
					onChange={(e) => { // extra logic goes here!
										onChangeSpeciesName(e); } } />
		</>
	);
```

We need a validation function:

```TSX
	const SpeciesName  : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
		const validate : (value : string) => string | undefined = (value) => {
		// do stuff
		return undefined;
		}

		return(
		<>
			<label for='speciesName'>Species Name</label>
			<input
				id='speciesName'
				type='text'
				value={speciesName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					onChangeSpeciesName(e);
				}
				}
			/>
		</>

	);
}
```

And to store the result in state:

```TSX
	const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {

		const [ errorMessage, setErrorMessage ] = useState<string | undefined>(undefined);

		const validate : (value : string) => string | undefined = (value) => {
			// do stuff
			return undefined;
		}

		return(
		<>
			<label for='speciesName'>Species Name</label>
			<input
				id='speciesName'
				type='text'
				value={speciesName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeSpeciesName(e);
				}
				}
			/>
		</>

	);
}
```

We need to replace `// do stuff` with the actual validation. Remember the aliens said the species name _Must be between 3 and 23 characters. No numbers or special characters allowed!_

So we just have to write our own code to `validate` which checks the value meets these conditions, and then returns a suitable error message if not.

Finally, we need to add an `<ErrorMessage>` component to the project, which takes a prop of `errorMessage`. (Remember to create an `ErrorMessageProps` interface for this.)

Then we add the `<ErrorMessage>` to our Species Name field:

```TSX
	const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {

		const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

		const validate : (value : string) => string | undefined = (value) => {
			// do stuff
			return undefined;
		}

		return(
		<>
			<label for='speciesName'>Species Name</label>
			<input
				id='speciesName'
				type='text'
				value={speciesName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeSpeciesName(e);
				}
				}
			/>
			<ErrorMessage errorMessage={errorMessage}/>
		</>

	);
}
```

Hopefully this should be enough to get you going with one field, and then the remaining fields can use this pattern to validate according to its own rules.

🗣 Do reach out on Slack if you want help working through any of this!

Go back to [Activity 5](./activity_5.md) and get all the fields to display validation errors when required.
