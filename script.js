"use strict";

const income = document.getElementById("income__input");
const expenses = document.getElementById("expenses__input");
const incomeBtn = document.getElementById("income__btn");
const expensesBtn = document.getElementById("expenses__btn");
let totalIncome = 0;
let totalExpenses = 0;
let totalBudget = document.getElementById("budget--total");
const calculateBudgetBtn = document.getElementById("budget__btn");

// Creates Budget class
class Budget {
  constructor(total) {
    this.total = total;
  }
}

// Inherits from Budget class
class MyTotalIncome extends Budget {
  constructor(total) {
    super(total);
  }
  display(val1, val2, val3, val4) {
    if (val2.value != "") {
      val1 = parseFloat(val2.value);
      this.total += val1;
      let incomeItem = document.createElement("li");
      incomeItem.textContent = `${val4}: $${val1.toFixed(2)}`;
      document.querySelector(".income__items").appendChild(incomeItem);
      val3 = this.total;
      document.getElementById(
        "income__input--total"
      ).textContent = `$${val3.toFixed(2)}`;
      console.log(`Total income: ${val3.toFixed(2)}`);
    }
    return;
  }
}

// Inherits from Budget class
class MyTotalExpenses extends Budget {
  constructor(total) {
    super(total);
  }
  display(val1, val2, val3, val4) {
    if (val2.value != "") {
      val1 = parseFloat(val2.value);
      this.total -= val1;
      let expensesItem = document.createElement("li");
      expensesItem.textContent = `${val4}: $-${val1.toFixed(2)}`;
      document.querySelector(".expenses__items").appendChild(expensesItem);
      val3 = this.total;
      document.getElementById(
        "expenses__input--total"
      ).textContent = `$${val3.toFixed(2)}`;
      console.log(`Total expenses: ${val3.toFixed(2)}`);
    }
    return;
  }
}

// Inherits from Budget class
class MyBudgetTotal extends Budget {
  constructor(total) {
    super(total);
  }
  display() {
    totalBudget = totalIncome + totalExpenses;
    document.getElementById(
      "budget--total"
    ).textContent = `$${totalBudget.toFixed(2)}`;
    console.log(`Total Budget: ${totalBudget.toFixed(2)}`);
    return;
  }
}

// Creates income and expenses objects, inherits the Budget class' attributes
const myIncome = new MyTotalIncome(totalIncome);
const myExpenses = new MyTotalExpenses(totalExpenses);
const myBudget = new MyBudgetTotal(totalBudget);

// Event listeners for income/expenses buttons
incomeBtn.addEventListener("click", function () {
  const incomeInput = parseFloat(income.value);
  const incomeDescription = document.getElementById(
    "income__description"
  ).value;

  // Validate Description
  if (incomeDescription === "") {
    errorMessage("income__description", "Must include a valid ID");
  } else {
    setSuccess("income__description");
  }

  // Validate Amount
  if (!isValidAmount(incomeInput)) {
    errorMessage("income__input", "Must include a valid dollar amount");
  } else {
    setSuccess("income__input");
  }

  myIncome.display(incomeInput, income, totalIncome, incomeDescription);
  totalIncome = myIncome.total;
  myBudget.display();
});

expensesBtn.addEventListener("click", function () {
  const expensesInput = parseFloat(expenses.value);
  const expensesDescription = document.getElementById(
    "expenses__description"
  ).value;

  // Validate Description
  if (expensesDescription === "") {
    errorMessage("expenses__description", "Must include a valid ID");
  } else {
    setSuccess("expenses__description");
  }

  // Validate Amount
  if (!isValidAmount(expensesInput)) {
    errorMessage("expenses__input", "Must include a valid dollar amount");
  } else {
    setSuccess("expenses__input");
  }

  myExpenses.display(
    expensesInput,
    expenses,
    totalExpenses,
    expensesDescription
  );
  totalExpenses = myExpenses.total;
  myBudget.display();
});

const errorMessage = (elementId, message) => {
  const inputControl = document.getElementById(elementId).parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  if (errorDisplay) {
    errorDisplay.textContent = message;
    inputControl.classList.add("error");
  }
};

const setSuccess = (elementId) => {
  const inputControl = document.getElementById(elementId).parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  if (errorDisplay) {
    errorDisplay.textContent = "";
    inputControl.classList.remove("error");
  }
};

// regex to define input validity
const isValidAmount = (amount) => {
  const re = /^\$?[0-9]+(\.[0-9][0-9])?$/;
  return re.test(amount);
};
