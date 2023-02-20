# Activity 2 - Plan Your Form

![Sample Form](../public/sample-form.png)

-   Take a moment to consider how you might design the rest of the form in code.

🤔 Just from looking at the form, what components do you think you'll need?

---

There's no right or wrong answer here. As usual, design involves making tradeoffs between different advantages and disadvantages.

For example, you might decide to create a separate component for each form input. This seems like it would make it easier to give each component separate validation logic. But this comes with the disadvantage of having to repeat yourself as you create many similar components. If you were designing a large form then this could quickly become a huge pain!

However, this particular W12-M form only has a few fields so perhaps repeating ourselves and making a specific one for each, like `<SpeciesName/>` and `<PlanetName/>` and `<NumberOfBeings/>`, is fine.

On the other hand, you could aim to create a generic `<TextInput/>` component which you can reuse for the different fields. However, you'll have to figure out a way to give each component different validation logic and labels AND a way to write tests which test the validation logic in a way that doesn't involve repeating too much code.

👉 **It's going to be easier for this particular project if you make separate components for each field**, like `<SpeciesName/>`, `<PlanetName/>` and `<NumberOfBeings/>`, etc. So let's start that way...

👩‍🔬 However, the aliens have provided an _extension challenge_ at the end to make this form more generic, so you can keep that in mind as you go!

---

What about the validation messages? They could be a separate, shared component that each input component calls with a particular error message. Or they could be part of the input components themselves - this would involve more repetition, but might be easier to get started with.

You might change your mind about components as you go - that's fine! The important thing is to have thought about these trade-offs a bit before going in. We can always refactor later!

Having made a plan, let's write some code in [Activity 3](./activity_3.md) 😸
