"use strict";

let incomeInput = document.querySelector(".income__input").value;
let expensesInput = document.querySelector(".expenses__input").value;
let incomeBtn = document.querySelector(".income__btn");
let expensesBtn = document.querySelector(".expenses__btn");
let totalIncome = document.querySelector(".income__input--total").value;
let totalExpenses = document.querySelector(".expenses__input--total").value;
let totalBudget = document.querySelector(".budget--total").value;
let calculateBudgetBtn = document.querySelector(".budget__btn");

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
incomeBtn.addEventListener("click", myIncome.display(incomeInput));
expensesBtn.addEventListener("click", myExpenses.display(expensesInput));
calculateBudgetBtn.addEventListener("click", myBudget.display());

myIncome.display(incomeInput);
myBudget.display();
