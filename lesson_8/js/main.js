'use strict';

let startBtn = document.querySelector('#start');

let budgetValue = document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalexpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');
let checkSavings = document.querySelector('.checksavings > input');

let expensesItems = document.querySelectorAll('.expenses-item');

let expensesItemBtn = document.querySelector('.expenses-item-btn');
let optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');
let countBtn = document.querySelector('.count-budget-btn');

let expensesSum = 0;

let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

function start () {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt("Ваш бюджет на месяц?", '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }

  appData.budget = money;
  appData.timeData = time;

  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
  expensesItemBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBtn.disabled = false;
}

startBtn.addEventListener('click', start);

expensesItemBtn.addEventListener('click', function () {
  for (let i = 0; i < expensesItems.length; i++) {
    let a = expensesItems[i].value;
    let b = expensesItems[++i].value;

    if ((typeof(a)) != null && (typeof(b)) != null && (typeof(a)) != '' && (typeof(b)) != '' && (typeof(a)) === 'string' && (typeof(b)) === 'string' && a.length < 50 ) {
      console.log('done ' + i);
      appData.expenses[a] = b;
      expensesSum += +b;
    } else {
      console.log('Введите данные');
      i--;
    }
  }

  expensesValue.textContent = expensesSum;

});

optionalExpensesBtn.addEventListener('click', function () {
  for (let t = 0; t < optionalExpensesItems.length; t++) {
    let OptExpenses = optionalExpensesItems[t].value;
    appData.optionalExpenses[t] = OptExpenses;

    optionalexpensesValue.textContent += appData.optionalExpenses[t] + ' ';
  }
});

countBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {

    appData.moneyPerDay = +((appData.budget - expensesValue.textContent) / 30).toFixed(); // toFixed возвращает строку
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Низкий уровень дохода';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень дохода';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень дохода';
    } else {
      levelValue.textContent = 'Ошибка';
    }
  } else {
    daybudgetValue.textContent = 'Произошла ошибка. Начните рассчет';
  }
});

chooseIncome.addEventListener('change', function () {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function () {
  if (appData.savings) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', function () {
  if (appData.savings) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {
  },
  income: [],
  timeData: time,
  savings: false
};

