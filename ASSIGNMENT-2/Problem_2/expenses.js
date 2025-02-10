// expenses.js (Module)

const expenses = [];

// Function to add an expense
function addExpense(description, amount, date) {
  try {
    // Validate description
    if (!description || description.trim() === "") {
      throw new Error("Description cannot be empty");
    }

    // Validate amount (it must be a positive number)
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Amount must be a positive number");
    }

    // Validate date (must be a valid Date object)
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Invalid date");
    }

    // Create and push the new expense object
    const newExpense = { description, amount, date };
    expenses.push(newExpense);
    console.log("Expense added successfully");
  } catch (error) {
    console.error("Error adding expense:", error.message);
  }
}

// Function to calculate total expenses using reduce()
function totalExpenses() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  console.log(`Total Expenses: $${total}`);
  return total;
}

// Function to filter expenses by a specific date range
function filterByDateRange(startDate, endDate) {
  try {
    if (!(startDate instanceof Date) || isNaN(startDate)) {
      throw new Error("Start date is invalid");
    }
    if (!(endDate instanceof Date) || isNaN(endDate)) {
      throw new Error("End date is invalid");
    }

    // Filter expenses within the date range
    const filteredExpenses = expenses.filter(expense => 
      expense.date >= startDate && expense.date <= endDate
    );

    if (filteredExpenses.length > 0) {
      console.log("Filtered Expenses:");
      filteredExpenses.forEach(expense => {
        console.log(`${expense.description} - $${expense.amount} on ${expense.date}`);
      });
    } else {
      console.log("No expenses found within the given date range.");
    }
  } catch (error) {
    console.error("Error filtering expenses:", error.message);
  }
}

// Simulate fetching an expense report asynchronously
function asyncFetchExpenseReport() {
  return new Promise((resolve, reject) => {
    // Simulate a delay with setTimeout
    setTimeout(() => {
      if (expenses.length > 0) {
        resolve(expenses);
      } else {
        reject("No expenses found");
      }
    }, 2000); // 2 seconds delay
  });
}

// Export functions
module.exports = { addExpense, totalExpenses, filterByDateRange, asyncFetchExpenseReport };
