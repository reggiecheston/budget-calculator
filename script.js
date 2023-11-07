"use strict";

const income = document.getElementById("income__input");
const expenses = document.getElementById("expenses__input");
const incomeBtn = document.getElementById("income__btn");
const expensesBtn = document.getElementById("expenses__btn");
const totalIncome = document.getElementById("income__input--total");
const totalExpenses = document.getElementById("expenses__input--total");
const totalBudget = document.getElementById("budget--total");
const calculateBudgetBtn = document.getElementById(".budget__btn");

// Creates Budget class
class Budget {
  constructor(total) {
    this.total = total;
  }
}

// Inherits from Budget class
class MyTotals extends Budget {
  constructor(total) {
    super(total);
  }
  display(num) {
    console.log("MyTotals function works");
    return (this.total += num);
  }
}

// Inherits from Budget class
class MyBudgetTotal extends MyTotals {
  constructor(total) {
    super(total);
  }
  display() {
    console.log("MyBudgetTotal function works");
    return (this.total = totalIncome - totalExpenses);
  }
}

// Creates income and expenses objects, inherits the Budget class' attributes
const myIncome = new MyTotals(totalIncome);
const myExpenses = new MyTotals(totalExpenses);
const myBudget = new MyBudgetTotal(totalBudget);

// Event listeners for income/expenses buttons
// incomeBtn.addEventListener("click", myIncome.display(incomeInput));
// expensesBtn.addEventListener("click", myExpenses.display(expensesInput));
// calculateBudgetBtn.addEventListener("click", myBudget.display());

// Hardcoded event listeners
incomeBtn.addEventListener("click", function (incomeInput) {
  incomeInput = income.value;
  totalIncome += incomeInput;
  console.log(totalIncome);
  return;
});
expensesBtn.addEventListener("click", function (expensesInput) {
  expensesInput = expenses.value;
  totalExpenses += expensesInput;
  console.log(totalExpenses);
  return;
});
calculateBudgetBtn.addEventListener("click", function () {
  totalBudget = totalIncome - totalExpenses;
  console.log(totalBudget);
  return;
});

// typeof is string?
// console.log(typeof myIncome["display"](incomeInput));
// // typeof is function
// console.log(
//   typeof function (incomeInput) {
//     console.log("MyTotals function works");
//     return (this.total += incomeInput);
//   }
// );
// myExpenses.display(incomeInput);
// myBudget.display();

// console.log(myExpenses["total"]);
