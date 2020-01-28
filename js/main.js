'use strict'

let money = +prompt('Ваш месячный доход?'),
    income = ' подработка ',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'тренажерка, квартира, интернет') ,
    deposit = confirm('Есть ли у вас депозит в банке?'),
    depositResalt = deposit === true ? 'true' : 'false',
    mission = 6000;

function expenses() {
  let questionSpending = prompt('Введите обязательную статью расходов!'),
    questionCost = +prompt('Во сколько это обойдется?');
  return{
    questionSpending: questionSpending,
    questionCost: questionCost
  };
}

let resalt1 = expenses();
let resalt2 = expenses();

let budgetMonth = money - (resalt1.questionCost + resalt2.questionCost),
    budgetDay = (budgetMonth / 30),
    period = mission / budgetMonth;



  switch (true) {
    case  (budgetDay > 1200) :
    case  (budgetDay = 1200) :
      console.log('У вас высокий уровень дохода');
      break;
    case  (budgetDay > 600) : 
    case  (budgetDay = 600) :
      console.log('У вас средний уровень дохода');
      break;
    case  (budgetDay < 600) : console.log('К сожалению у вас уровень дохода ниже среднего');
      break;
    case  (budgetDay < 0) : console.log('Что то пошло не так');
      break;
    default: console.log('Не правильно работает');
  }

  console.log(money);
  console.log(depositResalt);
  console.log(typeof income);
  console.log(deposit);
  console.log(addExpenses.length);
  console.log('Период равен ' + period + ' месяцев ');
  console.log('Цель заработать ' + mission + ' долларов');
  console.log(addExpenses.toLocaleLowerCase());
  console.log(addExpenses.split(', '));
  console.log(budgetMonth);
  console.log(Math.floor(budgetDay));
  console.log(Math.ceil(period));