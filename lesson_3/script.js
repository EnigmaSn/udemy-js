'use strict';

let money;
let time;

function start () {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}

start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {
    1:
  },
  income: [],
  timeData: time,
  savings: true
};

function chooseExpenses () {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');

    if ((typeof(a)) != null && (typeof(b)) != null && (typeof(a)) != '' && (typeof(b)) != '' && (typeof(a)) === 'string' && (typeof(b)) === 'string' && a.length < 50 ) {
      console.log('done ' + i);
      appData.expenses[a] = b;
    } else {
      console.log('Введите данные');
      i--;
    }
  }
}

chooseExpenses();


function detectDayBudget () {
  appData.moneyPerDay = (appData.budget / 30).toFixed(); // toFixed возвращает строку
  alert('Бюджет на день: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel () {
  if (appData.moneyPerDay < 100) {
    console.log('Низкий уровень дохода');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень дохода');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень дохода');
  } else {
    console.log('Ошибка');
  }
}

detectLevel();

function checkSavings () {
  if (appData.savings) {
    let save = +prompt('Какова сумма накоплений?');
    let percent = +prompt('Под какой процент?');

    appData.monthIncome = save / 100 / 12 * percent;
    alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome)
  }
}
checkSavings();

function chooseOptExpenses () {
  for (let t = 1; t < 4; t++) {
    let OptExpenses = +prompt('Статья необязательных расходов?');
    appData.optionalExpenses[t] = OptExpenses;
  }
}
