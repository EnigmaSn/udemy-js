'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

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

// два альтернативных цикла
// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//   let b = prompt("Во сколько обойдется?", '');
//
//   if ((typeof(a)) != null && (typeof(b)) != null && (typeof(a)) != '' && (typeof(b)) != '' && (typeof(a)) === 'string' && (typeof(b)) === 'string' && a.length < 50 ) {
//     console.log('done ' + i);
//     appData.expenses[a] = b;
//   } else {
//     console.log('Введите данные');
//     i--;
//   }
//   i++;
// }

// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//   let b = prompt("Во сколько обойдется?", '');
//
//   if ((typeof(a)) != null && (typeof(b)) != null && (typeof(a)) != '' && (typeof(b)) != '' && (typeof(a)) === 'string' && (typeof(b)) === 'string' && a.length < 50 ) {
//     console.log('done ' + i);
//     appData.expenses[a] = b;
//   } else {
//     console.log('Введите данные');
//     i--;
//   }
//   i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Бюджет на день: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Низкий уровень дохода');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень дохода');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень дохода');
} else {
  console.log('Ошибка');
}