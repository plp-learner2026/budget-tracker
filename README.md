# SpendWise Dashboard

## About the Project

SpendWise is an interactive budget tracking dashboard designed to help users understand their monthly budget, expenses, and remaining balance.

The project started as a static dashboard using HTML and CSS. JavaScript was introduced in Week 5 to perform budget calculations and collect user input.

In Week 6, the project was improved by adding arrays, loops, conditional statements, DOM manipulation, and event listeners. Users can now update their budget and add expense records directly from the webpage.

## Week 6 Improvements

The following improvements were made to the SpendWise dashboard:

- Added an interactive budget form.
- Added an expense form.
- Added an array to store expense records.
- Added loops to process expense records.
- Added conditional statements for budget decisions.
- Added dynamic expense cards using JavaScript.
- Added DOM manipulation to update the webpage.
- Added event listeners for user interactions.
- Added automatic calculation of total expenses.
- Added automatic calculation of the remaining balance.
- Added budget feedback based on spending levels.

## Conditional Statements

Conditional statements are used to evaluate different budgeting scenarios.

For example:

- If expenses are greater than the budget, the user is informed that the budget has been exceeded.
- If expenses equal the budget, the user is informed that the budget has been reached.
- If expenses reach 80% or more of the budget, a warning is displayed.
- Otherwise, the user receives feedback that spending is within the budget.

Conditional statements are also used to validate the budget and expense inputs.

## Arrays

An array called `expenses` stores multiple expense records.

Each record contains:

- Category
- Amount
- Description

Example categories include:

- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

The array allows multiple expense records to be stored and processed by JavaScript.

## Loops

A `for` loop is used to go through the expense array.

The loop is used to:

1. Calculate the total expenses.
2. Process each expense record.
3. Create and display expense cards on the webpage.

This allows the program to work with multiple records instead of calculating each expense separately.

## DOM Manipulation

The Document Object Model (DOM) is used to update the webpage dynamically.

JavaScript updates:

- Monthly budget
- Total expenses
- Remaining balance
- Number of expense records
- Budget feedback
- Expense cards

The expense cards are created dynamically using JavaScript instead of being permanently written into the HTML.

## User Interactions and Events

Event listeners are used to respond to user actions.

The project includes:

### Budget Form

The user can enter a new monthly budget.

When the form is submitted:

1. JavaScript reads the input.
2. The value is converted into a number.
3. The budget is updated.
4. The dashboard is refreshed.
5. Feedback is displayed on the webpage.

### Expense Form

The user can select an expense category and enter an amount.

When the form is submitted:

1. JavaScript reads the user's input.
2. The input is validated.
3. A new expense record is added to the array.
4. The dashboard is updated.
5. A new expense card is displayed.

## JavaScript Functions

The project uses reusable functions to organize the program.

### `calculateTotalExpenses()`

Loops through the expense array and calculates the total amount spent.

### `calculateRemainingBalance()`

Subtracts total expenses from the monthly budget.

### `getBudgetStatus()`

Uses conditional statements to determine the user's current budget situation.

### `getExpenseStatus()`

Uses conditional statements to categorize individual expenses.

### `displayExpenses()`

Uses the DOM to create and display expense cards.

### `updateDashboard()`

Updates all dashboard information after the user makes a change.

## Complete Program Flow

The SpendWise application follows this process:

1. Expense records are stored in an array.
2. The user interacts with a form.
3. An event listener detects the action.
4. JavaScript validates the input.
5. Conditional statements evaluate the situation.
6. The expense array is updated when necessary.
7. Loops process the stored records.
8. DOM manipulation updates the webpage.
9. The user receives immediate feedback.

## Challenges and Solutions

### Challenge 1: Updating the webpage

Initially, JavaScript calculations were displayed mainly in the browser console.

The solution was to use DOM manipulation to display calculated values directly on the dashboard.

### Challenge 2: Managing multiple expenses

The Week 5 version stored each expense in a separate variable.

The solution was to use an array of expense objects so that multiple records could be stored and processed more efficiently.

### Challenge 3: Responding to user actions

The original program used `prompt()` to collect input.

The solution was to create HTML forms and event listeners so users can interact directly with the dashboard.

## Project Files

### `index.html`

Contains the structure of the SpendWise dashboard, forms, summary sections, and expense display area.

### `style.css`

Contains the visual styling, responsive design, CSS Grid, Flexbox, custom properties, forms, and light theme.

### `script.js`

Contains the arrays, loops, conditional statements, functions, event listeners, DOM manipulation, calculations, and user interactions.

### `README.md`

Explains the project, JavaScript concepts, improvements, challenges, and testing.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- DOM Manipulation
- JavaScript Arrays
- JavaScript Loops
- Conditional Statements
- Event Listeners
- Google Chrome Developer Tools
- Live Server

## Testing

The application was tested in the browser using Live Server and Chrome Developer Tools.

### Initial Data

- Monthly budget: $2,500
- Food: $320
- Transport: $180
- Rent: $900
- Entertainment: $150
- Savings: $500
- Utilities: $210

The initial total expenses are:

$2,260

The initial remaining balance is:

$240

### Interactive Testing

The budget form was tested by entering a new monthly budget.

The expense form was tested by:

1. Selecting an expense category.
2. Entering an expense amount.
3. Submitting the form.
4. Checking that the new expense appeared on the dashboard.
5. Checking that total expenses and remaining balance were updated.

The program was also tested with invalid values to confirm that conditional statements provide appropriate feedback.

## Author

Abdirizack Aden

---

## Deployment

### Live Website
**https://spendwise-abdirizack.netlify.app**

### GitHub Repository Information
- Repository: https://github.com/plp-learner2026/budget-tracker
- Visibility: Public
- Branch: `master`

### Deployment Tools
- GitHub (version control and source of the deployment)
- Netlify (hosting and continuous deployment)

### Deployment Process Summary
1. Checked the project structure: `index.html`, `style.css` and `script.js` are at the top level and linked with relative paths.
2. Confirmed the GitHub repository was public.
3. Created a Netlify account and imported the repository with **Import a Git repository**.
4. Deployed from the `master` branch with no build command and no publish directory, since the site is plain HTML, CSS and JavaScript.
5. Renamed the site from the random Netlify name to `spendwise-abdirizack`.
6. Set the project visibility to public so anyone can open the site.
7. Tested continuous deployment: changed the dashboard heading to "Welcome back, Abdirizack!", pushed to GitHub, and Netlify rebuilt and published the change automatically.
8. Tested the live site: styling, budget form, expense form, expense cards and navigation all work.

### Challenges Encountered During Deployment
- **Netlify onboarding:** the sign-up form reloaded several times, and a screen offered an AI site builder. I skipped it and used **Import a Git repository** to deploy my own code.
- **Wrong link:** the first address I copied was a deploy-specific link with a long prefix, not the main site address. I used the main `.netlify.app` address instead.
- **Private visibility:** the project was private by default, so only my team could open it. I changed it to public and checked it in a private browser window.
- **Missing local copy:** the project folder was no longer on my laptop. I cloned the repository from GitHub with `git clone`.
- **Unsaved editor state:** `index.html` showed empty in the editor while the file on disk was intact. I closed it without saving and reopened it, which avoided overwriting the file.

### Lessons Learned
- Netlify watches the GitHub branch, so every push becomes a new deploy without any manual upload.
- Relative file paths such as `style.css` work on any server, while local paths like `C:\...` would break on the live site.
- A site can look fine for the owner but be blocked for visitors, so always test in a private window.
- GitHub keeps a full copy of the project, so a lost local folder can be recovered with `git clone`.
- Checking `git status` before saving or committing shows whether anything was really changed.