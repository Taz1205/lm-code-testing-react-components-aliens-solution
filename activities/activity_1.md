# Activity 1 - The Requirements

The aliens have kindly presented humanity with a design for the W-12-M form:

![Sample Form](../public/sample-form.png)

Unfortunately, _they never provided an actual web page to submit it_. That's where you come in!

Your job is to create the form using React, and to use the power of React testing to make sure nobody can accidentally submit the form until all the fields are DEFINITELY valid.

This will mean writing:

1. **The form itself**, including basic testing
2. **Validation code** for the form fields which display errors to the user if data is invalid
3. **Automated Tests** which check that these validation rules actually work given different types of data

Before we get into it, the aliens left a short note for you:

---

## How To Produce the W-12-M Form : A Guide for Inferior Species

👽

Dear developer,

As superior beings, **we do not care about "visuals"**. If you want to waste time on making your form look "pretty" then that is up to you.

A basic looking form is sufficient, as long as it works correctly.

Love, The Aliens 💚

---

### Step 1 - Check out the sample project provided by the aliens

If you've run the project already using `npm/yarn start` you'll have seen there's a form header, but no actual form.

Let's see if they've left us any tests.

-   Run `npm test` and look at the output

![Sample Test Output](../public/sample-test-output.jpg)

Phew. These aliens might be about to destroy the Earth, but at least they've written tests for all their React components, so they're not _totally_ horrible!

-   Look through the following files: `App.test.tsx`, `W12MForm.test.tsx` and `W12MHeader.test.tsx`

Inspecting the files we can see the aliens have used some techniques you're familiar with, such as `getByText` and `expect(x).toBeInTheDocument()`.

But they've also used another way of inspecting the virtual DOM! `W12MForm.test.tsx` gets the `firstChild` of the `container` element that we get back from our test renderer. It seems you can use normal DOM manipulation methods even in your tests - very cool!

-   Make sure you understand all of the supplied tests and that all three are passing on your machine before you move on.

When you're ready, move on to [Activity 2](./activity_2.md)!
