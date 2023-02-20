# Testing React Components - Model Solution

This isn't a _perfect_ solution, because such a thing doesn't exist!

But it is a decent solution.

👉 Take some time to explore this repo and understand the techniques being used.

👉 Run the app with `npm install` and `npm start` and try out the form.

👉 Notice the validation uses a `touched` flag to only display messages once the user has interacted with an input.

👉 Notice the validation errors are broken into multiple specific errors - in other words, we don't give users a vague error like "Must be more than 2 chars and less than 23 chars and not contain numbers or special characters". We can say EXACTLY which rule (or rules) they are breaking, which is a much nicer user experience.

👉 Notice the use of some complex typing with `keyof` to make our state updates very simple - each input uses the _exact same_ `onChangeHandler` function.

👉 Notice the validation rules being defined for each input as an array of basic rules - this means we can write tests for those basic rules and then just combine them as we need for each input.

👉 Notice the tests for the `TextInput` and `SelectInput` and understand all of the tests being applied. Explore all the other tests too!
