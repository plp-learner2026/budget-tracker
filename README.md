# SpendWise Dashboard

## Project Title
SpendWise Dashboard: an interactive budget tracking web application, deployed with GitHub and Netlify.

## Project Description
SpendWise is an interactive budget tracking dashboard that helps users understand their monthly budget, expenses, and remaining balance. Users can update their budget and add expense records directly from the webpage, and the dashboard recalculates the totals, remaining balance and budget feedback immediately. This project is now published on the internet using GitHub and Netlify.

## Technologies Used
- HTML5, CSS3 (CSS Grid, Flexbox, custom properties) and JavaScript (arrays, loops, conditional statements, DOM manipulation, event listeners)
- Git and GitHub (version control and source of the deployment)
- Netlify (hosting and continuous deployment)
- Google Chrome Developer Tools and Live Server (local testing)

## GitHub Repository Information
- Repository: https://github.com/plp-learner2026/budget-tracker
- Visibility: Public
- Default branch: `master`
- Files at the top level: `index.html`, `style.css`, `script.js`, `README.md`

## Live Netlify Website URL
**https://spendwise-abdirizack.netlify.app**

The site name was changed from the random Netlify name to `spendwise-abdirizack`, and the project visibility is set to Public.

## Deployment Process Summary
1. Checked the project structure: `index.html`, `style.css` and `script.js` are at the top level and linked with relative paths.
2. Confirmed the GitHub repository was public.
3. Created a Netlify account and imported the repository with **Import a Git repository**.
4. Deployed from the `master` branch with no build command and no publish directory, since the site is plain HTML, CSS and JavaScript.
5. Renamed the site from the random Netlify name to `spendwise-abdirizack`.
6. Set the project visibility to public so anyone can open the site.
7. **Continuous deployment test:** changed the dashboard heading to "Welcome back, Abdirizack!", committed and pushed to GitHub, and Netlify rebuilt and published the change automatically.
8. **Final testing:** on the live site, the styles, script, budget form, expense form, expense cards and sidebar links all work, and the browser console shows no errors.

## Challenges Encountered During Deployment
- **Netlify onboarding:** the sign-up form reloaded several times, and a screen offered an AI site builder. I skipped it and used **Import a Git repository** to deploy my own code.
- **Wrong link:** the first address I copied was a deploy-specific link with a long prefix, not the main site address. I used the main `.netlify.app` address instead.
- **Private visibility:** the project was private by default, so only my team could open it. I changed it to public and checked it in a private browser window.
- **Missing local copy:** the project folder was no longer on my laptop. I cloned the repository from GitHub with `git clone`.
- **Unsaved editor state:** `index.html` showed empty in the editor while the file on disk was intact. I closed it without saving and reopened it, which avoided overwriting the file.
- **Data resets on refresh:** the app keeps its data in memory only, so changes disappear when the page reloads.

## Lessons Learned
- Netlify watches the GitHub branch, so every push becomes a new deploy without any manual upload.
- Relative file paths such as `style.css` work on any server, while local paths like `C:\...` would break on the live site.
- A site can look fine for the owner but be blocked for visitors, so always test in a private window.
- GitHub keeps a full copy of the project, so a lost local folder can be recovered with `git clone`.
- Checking `git status` before saving or committing shows whether anything was really changed.
- Without browser storage or a database, a web app cannot keep user data between visits.

---

# Project Details

## About the Project
The project started as a static dashboard using HTML and CSS. JavaScript was introduced in Week 5 to perform budget calculations and collect user input. In Week 6, the project was improved by adding arrays, loops, conditional statements, DOM manipulation, and event listeners.

## Week 6 Improvements
- Added an interactive budget form and an expense form.
- Added an array to store expense records, and loops to process them.
- Added conditional statements for budget decisions.
- Added dynamic expense cards using JavaScript.
- Added DOM manipulation and event listeners for user interactions.
- Added automatic calculation of total expenses and the remaining balance.
- Added budget feedback based on spending levels.

## Conditional Statements
- If expenses are greater than the budget, the user is informed that the budget has been exceeded.
- If expenses equal the budget, the user is informed that the budget has been reached.
- If expenses reach 80% or more of the budget, a warning is displayed.
- Otherwise, the user receives feedback that spending is within the budget.
- Conditional statements are also used to validate the budget and expense inputs.

## Arrays and Loops
An array called `expenses` stores the expense records, each with a category, amount and description (Food, Transport, Rent, Entertainment, Savings, Utilities). A `for` loop goes through the array to calculate the total expenses, process each record, and create the expense cards.

## DOM Manipulation
JavaScript updates the monthly budget, total expenses, remaining balance, number of expense records, budget feedback and expense cards. The expense cards are created dynamically instead of being written into the HTML.

## User Interactions and Events
- **Budget form:** JavaScript reads the input, converts it to a number, updates the budget, refreshes the dashboard and shows feedback.
- **Expense form:** JavaScript reads and validates the input, adds a new record to the array, updates the dashboard and shows a new expense card.

## JavaScript Functions
- `calculateTotalExpenses()`: loops through the expense array and calculates the total amount spent.
- `calculateRemainingBalance()`: subtracts total expenses from the monthly budget.
- `getBudgetStatus()`: uses conditional statements to determine the budget situation.
- `getExpenseStatus()`: uses conditional statements to categorize individual expenses.
- `displayExpenses()`: uses the DOM to create and display expense cards.
- `updateDashboard()`: updates all dashboard information after a change.

## Challenges and Solutions (Development)
1. **Updating the webpage:** calculations were only shown in the console, so DOM manipulation was used to display them on the dashboard.
2. **Managing multiple expenses:** separate variables were replaced with an array of expense objects.
3. **Responding to user actions:** `prompt()` was replaced with HTML forms and event listeners.

## Project Files
- `index.html`: structure of the dashboard, forms, summary sections and expense display area.
- `style.css`: styling, responsive design, CSS Grid, Flexbox, custom properties, forms and light theme.
- `script.js`: arrays, loops, conditionals, functions, event listeners, DOM manipulation and calculations.
- `README.md`: project documentation.

## Testing
Local testing used Live Server and Chrome Developer Tools. Initial data: monthly budget $2,500; Food $320, Transport $180, Rent $900, Entertainment $150, Savings $500, Utilities $210. Initial total expenses: $2,260; initial remaining balance: $240.

The budget form was tested by entering a new budget. The expense form was tested by selecting a category, entering an amount, submitting, and checking that the new card, total and remaining balance updated. Invalid values were tested to confirm the conditional feedback. The deployed site was tested again on Netlify (see the deployment section above).

## Author
Abdirizack Aden