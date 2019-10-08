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
  },
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function () {
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
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); // toFixed возвращает строку
    alert('Бюджет на день: ' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Низкий уровень дохода');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень дохода');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень дохода');
    } else {
      console.log('Ошибка');
    }
  },
  checkSavings: function () {
    if (appData.savings) {
      let save = +prompt('Какова сумма накоплений?');
      let percent = +prompt('Под какой процент?');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let t = 1; t < 4; t++) {
      let OptExpenses = +prompt('Статья необязательных расходов?');
      appData.optionalExpenses[t] = OptExpenses;
    }
  },
  chooseIncome: function () {
    let items = prompt ('Что принесет дополнительный доход? (Перечислите через запятую', '');
    while (items == '' || items == null || typeof items != 'string') {
      items = prompt ('Что принесет дополнительный доход? (Перечислите через запятую', '');
    }
    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то забыли?'));
    appData.income.sort();

    appData.income.forEach(function (item, index, incomeArr) {
      console.log('Способы доп. заработка: ' + (index + 1) + item);
    });
  }
};

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
