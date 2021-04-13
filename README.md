## Bench Accounting Code Test

Thank you for taking time to review my submission.

This app is an implementation of the test found here: https://resttest.bench.co/.

I have implemented the requirements as described in the test documentation. I'd like to take moment to highlight some notable parts of the application.

Note: I have also created a branch with some additional work, beyond the scope of the original requirements, that I would invite you to [look at here](https://github.com/jsaelhof/bench-test/tree/expense-summary)
<br/>
<br/>
<br/>

### Main Screen

![Main Screen](https://github.com/jsaelhof/bench-test/blob/5fd014b14865a5105a997624cd16127696130f81/images/screen_main.png "Main Screen")

For the transaction display, I chose to make a few small alterations to the mock provided.

The app only displays dates on the first row that date occurs on. I did this to improve readability by creating visual groups of transactions and eliminate repeated elements which can make it more difficult to scan the information.

I also chose to display the expense ledger as subtext beneath the company associated with the expense. Again, I felt this helped to increase the user's ability to scan the information by allowing them to focus initially on who the charge was associated with. The expense category is readily available but de-emphasized. This helps to provide heirarchy to the information. If a user was more interested in the category first, I would likely organize the information into groups by category and present each category in independant date order within each group. Ultimately both views could be provided, allowing the user to determine how best to reivew the data.

Finally, I chose to highlight deposits/payments with a light green background. I felt this allowed the user to more easily identify these items.
<br/>
<br/>
<br/>

### Error Screen

![Error Screen](https://github.com/jsaelhof/bench-test/blob/5fd014b14865a5105a997624cd16127696130f81/images/screen_error.png "Error Screen")

I chose to build a small error component to display any error that might occur while fetching the data.

Even though an error has occurred, I used this as an opportunity to highlight some of what I believe Bench's core tenants might be. Namely, security. I wanted to make the user feel that an unexpected error was not an out-of-control situation. I chose wording such as "we've caught a problem" and "we're checking every detail" to convey that despite an error occurring, Bench is being diligent at every step. I wanted to convey that Bench does not let mistakes slip through. After all, the user is trusting the company with some of its most important information...its finances.

I also provided some text to guide the user toward a solution. They can try again or return to the home page.

While I did not have time to design my own image, I used a stock image which I felt was at least similar to the general look-and-feel of the Bench.co brand (although I believe a better option could be produced given adequate time).

Finally, for the sake of clarity in the test app, I chose to present the exception message in small text at the bottom of the screen. This technical data is not often useful to the user and would likely have already been logged when it occurred. In a real scenario, I would not likely present this to the user unless it was directly helpful for them to resolve the issue.
<br/>
<br/>
<br/>

### Run

- `npm install`
- `npm start` (Runs on port 5000)
  <br/>
  <br/>
  <br/>

### Test

- `npm test` to start the test watcher

##### OR

- `npm run coverage` to run the tests watcher with coverage reporting
  <br/>
  <br/>
  <br/>

### Notable Dependencies

- @material-ui/core: Google's component framework. This app uses a few simple components from the library, a default theme for typography, as well as `makeStyles` for css-in-js.

- accounting.js: A simple library for currency formatting.

- axios: Used for fetching data.

- clsx: Small utility for conditionally assigning style classes and for assigning mulitple style classes.

- date-fns: Provides functions for working with dates. This app uses it for parsing strings to date objects as well as formatting.

- lodash: Used in this app for a small amount of functional programming

- @testing-library/react-hooks: Used to test hooks in isolation.

- @testing-library/user-event: Used to create user events in tests.
