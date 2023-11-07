let income = 0;
let expenses = 0;
let incomeBtn = "";
let expensesBtn = "";
let totalIncome = 0;
let totalExpenses = 0;
let totalBudget = 0;
let calculateBudgetBtn = "";

// Creates Budget class
class Budget {
  constructor(total) {
    this.total = total;
  }
  display(num) {
    return (this.total += num);
  }
}

// Inherits from Budget class
class MyTotals extends Budget {
  constructor(total) {
    super(total);
  }
  display(num) {
    return (this.total += num);
  }
}

// Inherits from Budget class
class MyBudgetTotal extends Budget {
  constructor(total) {
    super(total);
  }
  display() {
    return (this.total = totalIncome - totalExpenses);
  }
}

// Creates income and expenses objects, inherits the Budget class' attributes
const myIncome = new MyTotals(totalIncome);
const myExpenses = new MyTotals(totalExpenses);
const myBudget = new MyBudgetTotal(totalBudget);

// Event listeners for income/expenses buttons
incomeBtn.addEventLlistener("click", myIncome.display(income));
expensesBtn.addEventLlistener("click", myExpenses.display(expenses));
calculateBudgetBtn.addEventLlistener("click", myBudget.display());
