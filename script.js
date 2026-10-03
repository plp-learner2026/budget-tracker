// SpendWise - Week 6 Interactive Dashboard

// ===============================
// Budget Data
// ===============================

let monthlyBudget = 2500;

// Array containing multiple expense records
let expenses = [
    {
        category: "Food",
        amount: 320,
        description: "Monthly spending"
    },
    {
        category: "Transport",
        amount: 180,
        description: "Monthly spending"
    },
    {
        category: "Rent",
        amount: 900,
        description: "Monthly spending"
    },
    {
        category: "Entertainment",
        amount: 150,
        description: "Monthly spending"
    },
    {
        category: "Savings",
        amount: 500,
        description: "Monthly contribution"
    },
    {
        category: "Utilities",
        amount: 210,
        description: "Monthly spending"
    }
];


// ===============================
// DOM Elements
// ===============================

const budgetDisplay = document.getElementById("budget-display");
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const budgetFeedback = document.getElementById("budget-feedback");

const expenseForm = document.getElementById("expense-form");
const expenseCategory = document.getElementById("expense-category");
const expenseAmount = document.getElementById("expense-amount");
const expenseFeedback = document.getElementById("expense-feedback");

const expenseCards = document.getElementById("expense-cards");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");
const expenseCountDisplay = document.getElementById("expense-count");
const reportMessage = document.getElementById("report-message");


// ===============================
// Calculate Total Expenses
// ===============================

function calculateTotalExpenses() {

    let total = 0;

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// ===============================
// Calculate Remaining Balance
// ===============================

function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}


// ===============================
// Determine Budget Status
// ===============================

function getBudgetStatus(budget, totalExpenses) {

    if (totalExpenses > budget) {
        return "You have exceeded your monthly budget.";
    } else if (totalExpenses === budget) {
        return "You have reached your monthly budget.";
    } else if (totalExpenses >= budget * 0.8) {
        return "Warning: you are using most of your monthly budget.";
    } else {
        return "Good job! Your spending is within your budget.";
    }
}


// ===============================
// Determine Expense Status
// ===============================

function getExpenseStatus(amount) {

    if (amount >= 800) {
        return "High expense";
    } else if (amount >= 300) {
        return "Moderate expense";
    } else {
        return "Within range";
    }
}


// ===============================
// Display Expense Cards
// ===============================

function displayExpenses() {

    // Clear existing cards
    expenseCards.innerHTML = "";

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const card = document.createElement("article");

        card.className = "dashboard-card";
        card.setAttribute("tabindex", "0");

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const category = document.createElement("span");
        category.className = "card-label";
        category.textContent = expense.category;

        const amount = document.createElement("h2");
        amount.textContent = "$" + expense.amount.toFixed(2);

        const description = document.createElement("p");
        description.textContent = expense.description;

        const status = document.createElement("span");
        status.className = "card-status";
        status.textContent = getExpenseStatus(expense.amount);

        cardContent.appendChild(category);
        cardContent.appendChild(amount);
        cardContent.appendChild(description);

        card.appendChild(cardContent);
        card.appendChild(status);

        expenseCards.appendChild(card);
    }
}


// ===============================
// Update Dashboard
// ===============================

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    // Update budget
    budgetDisplay.textContent = "$" + monthlyBudget.toFixed(2);

    // Update total expenses
    totalExpensesDisplay.textContent = "$" + totalExpenses.toFixed(2);

    // Update remaining balance
    remainingBalanceDisplay.textContent =
        "$" + remainingBalance.toFixed(2);

    // Update number of records
    expenseCountDisplay.textContent = expenses.length;

    // Update budget feedback
    reportMessage.textContent =
        getBudgetStatus(monthlyBudget, totalExpenses);

    // Display all expense records
    displayExpenses();
}


// ===============================
// Budget Form Event Listener
// ===============================

budgetForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    // Conditional statement to validate budget
    if (newBudget <= 0) {

        budgetFeedback.textContent =
            "Please enter a budget greater than zero.";

        return;
    }

    // Update the budget
    monthlyBudget = newBudget;

    budgetFeedback.textContent =
        "Your monthly budget has been updated to $" +
        monthlyBudget.toFixed(2) +
        ".";

    // Update dashboard
    updateDashboard();

    // Clear input
    budgetInput.value = "";
});


// ===============================
// Expense Form Event Listener
// ===============================

expenseForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);

    // Validate category and amount
    if (category === "") {

        expenseFeedback.textContent =
            "Please select an expense category.";

        return;
    }

    if (amount <= 0) {

        expenseFeedback.textContent =
            "Please enter an expense amount greater than zero.";

        return;
    }

    // Create a new expense record
    const newExpense = {
        category: category,
        amount: amount,
        description: "Added by user"
    };

    // Add the new record to the array
    expenses.push(newExpense);

    // Display confirmation
    expenseFeedback.textContent =
        category +
        " expense of $" +
        amount.toFixed(2) +
        " was added successfully.";

    // Update the dashboard
    updateDashboard();

    // Reset the form
    expenseForm.reset();
});


// ===============================
// Initial Dashboard Display
// ===============================

updateDashboard();