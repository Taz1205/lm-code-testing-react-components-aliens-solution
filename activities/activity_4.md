# Activity 4 - Test the form

Oh yeah, this was all supposed to be about testing! After all, it's crucial for the safety of the planet that this form works correctly 🌍

-   For each component file you have created, add a corresponding `.test.tsx` file

💡 It may seem silly to test a component that just displays text, e.g. if you made a component like `<label>Some label</label>`. And it kinda is silly! But checking that every component renders can still be useful because someone else may come along and add functionality which breaks it. Your silly "does this render?" test might catch that bug... and prevent them from destroying the Earth.

-   Populate your `.test.tsx` files with sensible tests for your components

It's up to you what tests to write at this stage. For now we only care that each component has **basic functionality**.

Perhaps you want to test things like:

1. Does the component render?
2. If we give input fields certain values through props, do they display that value?
3. Does each input field call its onChange function and pass it the correct parameters?
4. Does the submit button call its handler function and pass it the correct parameters?

-   Make sure all your tests pass.

Time to add the final touches in [Activity 5](./activity_5.md) 💃 🕺
