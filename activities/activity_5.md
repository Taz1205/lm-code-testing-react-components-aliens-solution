# Activity 5 - Validation

We have a simple form rendering and all the state is stored in one place! That's pretty cool.

But the aliens are very finicky about their form and insist that each field conforms to some precise requirements. Let's look at what they want:

-   **Species Name**: Must be between 3 and 23 characters. No numbers or special characters allowed!

-   **Planet Name**: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.

-   **Number of beings**: Numbers ONLY. Must be at least 1,000,000,000.

-   **What is 2 + 2**: "4" must be selected. Selecting "Not 4" should display an error.

-   **Reason for sparing**: Must be between 17 and 153 characters.

It's unclear how a species is supposed to make a case in just 17 characters, but the client is always right 🙃

(even if they are aliens hellbent on the destruction of all things)

## Step 1 - Add validation rules

🤔 Where is the best place to validate the data?

Remember you're going to have to write tests for each component's validation messages, so ideally we'll include that logic in each component somehow.

---

The smart place seems like our `onChange` handlers. We can intercept them and add the extra logic we need.

Let's start with a text input, e.g. `SpeciesName` or `PlanetName`. Up to now, each component probably includes something like this:

```TSX
<input type="text" value={someValueFromProps} onChange={someFunctionFromProps}/>
```

But we can intercept that function to add extra logic and then call the original function

```TSX
<input type="text" onChange={(e) => { /* extra logic goes here */ someFunctionFromProps(e); }}/>
```

Remember `e.target.value` contains the current value of the input, which we can validate here.

One way to do this is to add a validation function in our component. In pseudocode this might look a bit like this:

```TSX
	const someComponent : React.FC<SomeComponentPropsInterface> = (props) => {

		const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

		const validate = ???; // some validation function here

		return(
			// rest of component here
			<input type="text" onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				someFunctionFromProps(e);
				}}/>
			<ErrorMessage message={errorMessage} />
		);

		}
```

👉 Take a moment to understand the pseudocode above before reading on.

💡 In `onChange` we're still calling the handler passed to us from the form component to inform it about any updates. But before that we're calling some `validate` function (not yet defined) and setting an error message to whatever pops out.

💡 We've set the type of `errorMessage` to be `string | undefined`. We could just use an empty string to signal "there's no errors" but why not get the type system to help us out? We can use `undefined` to mean "no errors", and get some practice with type unions in the process.

👉 Add an `<ErrorMessage/>` component to each field. This should take `errorMessage` from the state as a prop (remember the type is `string | undefined`), and its job is to display it in red if there's a message, or to display nothing if not.

👉 Now we need to write the `validate` function. It takes one parameter, which is a `string`, and returns a `string | undefined`, so it's going to look something like this:

```TSX
// Take some time to understand this syntax...
// note the type annotation of "(value: string) => string | undefined" - so TypeScript knows exactly what parameters and
// return values to expect from our validation functions, making each of them easy to write!
const validate : (value : string) => string | undefined = (value) => {
	// validation code here - needs to return an error message, or 'undefined' if no errors
};

// NB here's a function without a type annotation, for comparison with the syntax above
//    Note that TypeScript won't complain about not returning anything from this one, but it WILL complain if the above doesn't return. That's the advantage of telling TypeScript what we want our functions to return.
const anotherFunction = (value) => {

};

```

👉 Use this pattern to add a `validate` function to each field using the rules the aliens gave us. 👾

👉 Each field should now display a red error message if invalid data is entered.

😭 Getting lost? Check out [Activity 5 Hints](./activity_5_hints.md) for some extra help with one field which should get you going again.

We're nearly done!

Don't forget to take a break 🌯

All we have to do now is add some tests to make sure we did this step right! Move onto [Activity 6](./activity_6.md)
