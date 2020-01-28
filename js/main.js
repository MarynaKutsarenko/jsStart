'use strict';

const money = +prompt('Ваш месячный доход?'), // money month income 
      deposit = confirm('Есть ли у вас депозит в банке?'), //credit story in the bank
      income = ' подработка ', //extra money
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'тренажерка, квартира, интернет') , // regular exppenses per month
      mission = 6000; //purpose to accumulate for a period 

 /** The function requests interactively information about  name and cost of a single required expense.@returns {{questionCost: number, questionSpending: string}} */
function expenses() { 
  const questionSpending = prompt('Введите обязательную статью расходов!', ' квартира'), 
        questionCost = +prompt('Во сколько это обойдется?', '4000');
  return{
    questionSpending: questionSpending,
    questionCost: questionCost
  };
}
// We have 2 required expenses which are entered by user
const requiredExpense1 = expenses(), 
      requiredExpense2 = expenses(); 

const budgetMonth = money - (requiredExpense1.questionCost + requiredExpense2.questionCost),
      budgetDay = (budgetMonth / 30),
      period = (mission / budgetMonth);

if (budgetDay >= 1200){         //condition design with budgetDay
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200){
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}
  

console.log(money);
console.log(typeof income);
console.log(!!deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев ');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));
console.log(budgetMonth);
console.log(Math.floor(budgetDay));
console.log(Math.ceil(period));