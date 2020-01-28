'use strict'

const money = +prompt('Ваш месячный доход?'),
      deposit = confirm('Есть ли у вас депозит в банке?'),
      depositResalt = deposit === true ? 'true' : 'false';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'тренажерка, квартира, интернет') ,
    income = ' подработка ',
    mission = 6000;

function expenses() {
  const questionSpending = prompt('Введите обязательную статью расходов!', ' квартира'),
        questionCost = +prompt('Во сколько это обойдется?', '4000');
  return{
    questionSpending: questionSpending,
    questionCost: questionCost,
  };
}

let resalt1 = expenses();
let resalt2 = expenses();

let budgetMonth = money - (resalt1.questionCost + resalt2.questionCost),
    budgetDay = (budgetMonth / 30),
    period = (mission / budgetMonth);

if (budgetDay >= 1200)
  console.log('У вас высокий уровень дохода');
else if (budgetDay >= 600 && budgetDay < 1200)
  console.log('У вас средний уровень дохода');
else if (budgetDay < 600)
  console.log('К сожалению у вас уровень дохода ниже среднего');
else (budgetDay = 0 && budgetDay < 0) 
  console.log('Что то пошло не так');
 

 

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