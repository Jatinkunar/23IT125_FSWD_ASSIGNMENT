// test.js (Testing script)

const { addExpense, totalExpenses, filterByDateRange, asyncFetchExpenseReport } = require('./expenses');

// Add some expenses
addExpense("Groceries", 50, new Date("2025-02-05"));
addExpense("Movie Tickets", 30, new Date("2025-02-06"));
addExpense("Dining Out", 100, new Date("2025-02-07"));
addExpense("Book", 20, new Date("2025-02-08"));

// Calculate total expenses
totalExpenses();

// Filter expenses by date range
const startDate = new Date("2025-02-06");
const endDate = new Date("2025-02-07");
filterByDateRange(startDate, endDate);

// Fetch expense report asynchronously
asyncFetchExpenseReport()
  .then(report => {
    console.log("Expense Report:", report);
  })
  .catch(error => {
    console.error("Error fetching expense report:", error);
  });
