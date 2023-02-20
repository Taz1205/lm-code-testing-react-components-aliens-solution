# Activity 3 - Hints

Let's work through creating one of the fields.

Here's an example (but broken) React component for our SpeciesName:

```TSX
const SpeciesName : React.FC = () => (
    <>
        <label htmlFor='speciesName'>Species Name</label>
        <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />
    </> );
```

---

The tricky part is figuring out where our `speciesName` and `onChangeSpeciesName` come from.

As we discussed already, we want our **form** to manage all of the individual `input` state data, so the form component always has access to everything entered.

So, in `W12MForm.tsx` we can add some code to hold the state for this component:

```TSX
const [speciesName, setSpeciesName] = useState<string>('humans');
```

---

Then, also in `W12MForm.tsx`, we can pass the state value and a function to handle changing it into our `<SpeciesName/>` component:

```TSX
<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
```

💡 The `onChange` event for an input gives us an event parameter, often called `e`, which contains the new value held by the input, which is stored in `e.target`. We can pass the value of this target to our setter function from `useState` to update the state variable whenever the form changes - e.g. when the user types in the input box.

---

Of course, we'll have to update our `<SpeciesName>` component to receive those props, connecting the state in the form to the values we're using in the child component. Change this:

```TSX
const SpeciesName : React.FC = () => /* ... etc... */
```

to this:

```TSX
interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	
	// You might be wondering what line 50 (e: React.ChangeEvent<HTMLInputElement>) is saying. Let's break it down! 🔨😃 

	// React has different ChangeEvents for different elements that might change. Imagine a React.ChangeEvent<HTMLTextAreaElement> or React.ChangeEvent<HTMLSelectElement>, these are the specific events you get back from changing specific types of element. This means when you write the code you know what type of element you're reacting to, so you might want to do different things with a select versus an input text box.
	
	// If you wanted the same function for all of them (for example, if we wanted to refactor our forms so we had one function that handled all of them), you could write a function with the signature (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void, and pass that function as onChange to any of those kinds of elements!
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => /* ... etc... */
```

We've created an input which keeps its state in the form component and updates it with any changes - hooray! 🥳

Once you've repeated this process for ALL the fields, you can return to [Activity 3](./activity_3.md) and continue from there.
