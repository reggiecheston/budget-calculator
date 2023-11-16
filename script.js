"use strict";

const incomeInput = document.getElementById("income__input");
const expensesInput = document.getElementById("expenses__input");
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
  display() {
    totalBudget = totalIncome + totalExpenses;
    document.getElementById(
      "budget--total"
    ).textContent = `$${totalBudget.toFixed(2)}`;
    console.log(`Total Budget: ${totalBudget.toFixed(2)}`);
    return;
  }
}

// Inherits from Budget class
class MyTotalIncome extends Budget {
  constructor(total) {
    super(total);
  }
  display(val1, val2, val3, val4) {
    // removes '$' and ',' before evaluating
    val2.value = val2.value.replace("$", "");
    val2.value = val2.value.replace(",", "");
    val2.value = val2.value.replace(",", "");
    console.log(val2.value);

    val1 = parseFloat(val2.value);
    // ensures input is valid before evaluating to avoid the case of outputting NaN
    if (val2.value != "" && isValidAmount(val2.value)) {
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
    // removes '$' and ',' before evaluating
    val2.value = val2.value.replace("$", "");
    val2.value = val2.value.replace(",", "");
    val2.value = val2.value.replace(",", "");
    console.log(val2.value);

    val1 = parseFloat(val2.value);
    // ensures input is valid before evaluating to avoid the case of outputting NaN
    if (val2.value != "" && isValidAmount(val2.value)) {
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
}

// Creates income and expenses objects, inherits the Budget class' attributes
const myIncome = new MyTotalIncome(totalIncome);
const myExpenses = new MyTotalExpenses(totalExpenses);
const myBudget = new MyBudgetTotal(totalBudget);

// Event listener for add income button
incomeBtn.addEventListener("click", function () {
  const incomeInputValue = parseFloat(incomeInput.value);
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
  if (!isValidAmount(incomeInput.value)) {
    errorMessage("income__input", "Must include a valid dollar amount");
  } else {
    setSuccess("income__input");
  }

  myIncome.display(
    incomeInputValue,
    incomeInput,
    totalIncome,
    incomeDescription
  );
  totalIncome = myIncome.total;
  myBudget.display();
});

// Event listener for add expense button
expensesBtn.addEventListener("click", function () {
  const expensesInputValue = parseFloat(expensesInput.value);
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
  if (!isValidAmount(expensesInput.value)) {
    errorMessage("expenses__input", "Must include a valid dollar amount");
  } else {
    setSuccess("expenses__input");
  }

  myExpenses.display(
    expensesInputValue,
    expensesInput,
    totalExpenses,
    expensesDescription
  );
  totalExpenses = myExpenses.total;
  myBudget.display();
});

const errorMessage = (element, message) => {
  const inputControl = document.getElementById(element).parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  if (errorDisplay) {
    errorDisplay.textContent = message;
    inputControl.classList.add("error");
  }
};

const setSuccess = (element) => {
  const inputControl = document.getElementById(element).parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  if (errorDisplay) {
    errorDisplay.textContent = "";
    inputControl.classList.remove("error");
  }
};

// regex to define input validity
const isValidAmount = (amount) => {
  // Remove dollar signs and commas before validation
  let cleanedAmount = String(amount).replace(/[\$,]/g, "");
  cleanedAmount = parseFloat(cleanedAmount);

  // Validate the cleaned amount
  const re = /^\d+(\.\d{1,2})?$/;
  return re.test(cleanedAmount);
};
