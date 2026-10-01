# SpendWise Dashboard

## About the Project

SpendWise is a simple budget tracking dashboard designed to help users understand their monthly budget, expenses, and remaining balance.

The project started as a static dashboard using HTML and CSS. In Week 5 and Week 6, JavaScript was added to provide the foundation for budget calculations and user input.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

- Variables using `let`
- User input using `prompt()`
- Converting input from strings to numbers using `Number()`
- Arithmetic calculations
- Reusable functions
- Returning values from functions
- Displaying results using `console.log()`

## Variables and Data

JavaScript variables are used to store the monthly budget and different expense categories.

The project stores expenses for:

- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

These values are used to calculate the total expenses and remaining balance.

## User Input

The program collects information from the user using JavaScript `prompt()`.

The user is asked to enter:

1. Monthly budget
2. Total expenses

The entered values are converted from strings into numbers using `Number()` so they can be used in calculations.

## Budget Calculations

The program calculates the remaining balance by subtracting total expenses from the monthly budget.

For example:

- Monthly budget: $2,500
- User expenses: $1,000
- Remaining balance: $1,500

The program also calculates the total expenses stored in the SpendWise application.

## Functions

Reusable functions are used to organize the calculations.

The `calculateTotalExpenses()` function adds all stored expense categories together.

The `calculateRemainingBalance()` function subtracts expenses from the budget and returns the remaining balance.

Using functions makes the code easier to organize and reuse.

## Console Output

The calculated results are displayed in the browser's Developer Tools Console.

The console displays:

- Monthly budget
- User expenses
- Remaining balance
- Total SpendWise expenses
- Current remaining balance

## Project Files

### `index.html`

Contains the structure and content of the SpendWise dashboard.

### `style.css`

Contains the visual styling, layout, responsive design, CSS Grid, Flexbox, custom properties, and dark theme.

### `script.js`

Contains the JavaScript variables, user input, calculations, reusable functions, and console output.

### `README.md`

Provides information about the project and explains the technologies and JavaScript concepts used.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- Google Chrome Developer Tools

## Testing

The JavaScript program was tested in the browser using Live Server and Chrome Developer Tools.

Test input:

- Monthly budget: $2,500
- User expenses: $1,000

The program correctly calculated:

- Remaining balance: $1,500
- Total stored expenses: $2,260
- Current remaining balance: $240

## Author

Abdirizack aden