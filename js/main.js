'use strict';

const money = +prompt('Ваш месячный доход?'),
      deposit = confirm('Есть ли у вас депозит в банке?'),
      depositResalt = deposit === true ? 'true' : 'false',  //return boolean value
      income = ' подработка ';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'тренажерка, квартира, интернет') ,
    mission = 6000;

function expenses() {  // ask qwestions to users and return answers
  const questionSpending = prompt('Введите обязательную статью расходов!', ' квартира'), 
        questionCost = +prompt('Во сколько это обойдется?', '4000');
  return{
    questionSpending: questionSpending,
    questionCost: questionCost,
  };
}

let result1 = expenses(); // save result from function expenses
let result2 = expenses();

let budgetMonth = money - (resalt1.questionCost + resalt2.questionCost),
    budgetDay = (budgetMonth / 30),
    period = (mission / budgetMonth);

if (budgetDay >= 1200){         //condition design with budgetDay
  console.log('У вас высокий уровень дохода');
} 
else if (budgetDay >= 600 && budgetDay < 1200){
  console.log('У вас средний уровень дохода');
}
else if (budgetDay < 600 && budgetDay >= 0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
}
else {
  console.log('Что то пошло не так');
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