# Testing React Components - Model Solution

This isn't a _perfect_ solution, because such a thing doesn't exist!

But it is a decent solution.

⚠️ We didn't expect you to use the techniques shown here in your own solutions! They go beyond the instructions given in the assignment and a new TypeScript operator `keyof` is used in a couple of places. But having worked on this form yourself, you can understand the approach taken in this repo and begin to integrate some of these techniques in your future projects. 🙌

## Exploring this Solution

👉 Run the app with `npm install` and `npm start` and try out the form.

👉 Explore the code, reading the comments. Ask in Slack if there's anything you're not sure about!

## Things worth Noticing 👀

👉 Notice the _simple_ state. `useState` is only used 3 times!

1️⃣ An object to hold the data for `W12MForm`
2️⃣ A `boolean` flag to track if the submit button has been pressed
3️⃣ A `boolean` flag to track if the user has touched each input

👀 There are _zero_ uses of `useEffect` - this app does not interact with the outside world!

👉 Notice the validation uses a `touched` flag to only display messages once the user has interacted with an input.

👉 Notice that the validation errors are broken into multiple specific errors using a `string[]` - in other words, we don't give users a single vague error like "Must be more than 2 chars and less than 23 chars and not contain numbers or special characters". We can say EXACTLY which rule (or rules) they are breaking, which is a much nicer user experience.

👉 Notice the use of the new `keyof` operator to make our state updates very simple - each input uses the _exact same_ `onChangeHandler` function, which is only defined _once_.

👉 Notice the validation functions are defined for each input as an array of basic rules. This means we can write tests for those basic rules and then just combine them as we need for each input. It's very easy to look at the function for each input and see exactly what the rules are, or change them.

👉 Notice the tests for the `TextInput` and `SelectInput` and understand all of the tests being applied. Explore all the other tests too!
