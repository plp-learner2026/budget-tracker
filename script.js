// SpendWise - JavaScript Foundation

// Budget-related variables
let monthlyBudget = 2500;
let foodExpense = 320;
let transportExpense = 180;
let rentExpense = 900;
let entertainmentExpense = 150;
let savingsExpense = 500;
let utilitiesExpense = 210;

// Calculate total expenses
function calculateTotalExpenses() {
    return (
        foodExpense +
        transportExpense +
        rentExpense +
        entertainmentExpense +
        savingsExpense +
        utilitiesExpense
    );
}

// Calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Collect user input
let userBudget = prompt("Enter your monthly budget:");

let userExpense = prompt("Enter your total expenses:");

// Convert user input from strings to numbers
userBudget = Number(userBudget);
userExpense = Number(userExpense);

// Perform calculations using user input
let remainingBalance = calculateRemainingBalance(
    userBudget,
    userExpense
);

// Calculate the current SpendWise expenses
let totalExpenses = calculateTotalExpenses();
let currentBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);

// Display results in the browser console
console.log("=== SpendWise Budget Summary ===");
console.log("Monthly Budget: $" + userBudget);
console.log("User Expenses: $" + userExpense);
console.log("Remaining Balance: $" + remainingBalance);

console.log("=== Current SpendWise Data ===");
console.log("Monthly Budget: $" + monthlyBudget);
console.log("Total Expenses: $" + totalExpenses);
console.log("Remaining Balance: $" + currentBalance);