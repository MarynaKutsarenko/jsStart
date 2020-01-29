'use strict';

const money = +prompt('Ваш месячный доход?', '1000'), // money month income 
      deposit = confirm('Есть ли у вас депозит в банке?'), //credit story in the bank
      income = ' подработка ', //extra money
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'тренажерка, квартира, интернет') , // regular exppenses per month
      mission = 6000; //purpose to accumulate for a period 

 /** The function requests interactively information about  name and cost of a single required expense.@returns {{questionCost: number, questionSpending: string}} */
function getRequiredExpense(defaultName = ' квартира' , defaultExpense = '4000') { 
  const questionSpending = prompt('Введите обязательную статью расходов!'), 
        questionCost = +prompt('Во сколько это обойдется?');
  return{
    questionSpending: questionSpending,
    questionCost: questionCost
  };
}
// We have 2 required expenses which are entered by user
const requiredExpense1 = getRequiredExpense(), 
      requiredExpense2 = getRequiredExpense(); 

// The function requests interactively information about month necessary expenses 
function getExpensesMonth( expenses1, expenses2) {
  const expensesMonth = (expenses1 + expenses2);
    return {
      expensesMonth: expensesMonth
    };
};
// We have required month necessary expenses
const expensesMonth = getExpensesMonth(requiredExpense1.questionCost , requiredExpense2.questionCost);

// The function requests interactively information about month accumulate
function getAccumulatedMonth(total, expenses1, expenses2) {
  const accumulatedMonth = (total - (expenses1 + expenses2));
    return{
      accumulatedMonth: accumulatedMonth
    };
}
// We have required month accumulate
const accumulatedMonth = getAccumulatedMonth(money, requiredExpense1.questionCost , requiredExpense2.questionCost);

// The function requests interactively information about time which take to get accumulate money
function getTargetMonth(period, total) {
  const targetMonth = (period / total);
    return{
      targetMonth: targetMonth
    };
}
// We have required save money per period
const targetMonth = getTargetMonth(mission, accumulatedMonth);
console.log(targetMonth );


/*const budgetDay = (budgetMonth / 30),
      period = (mission / budgetMonth);
*/

/** The function requests interactively information about condition design with budgetDay*/
function name(params) {
  if (budgetDay >= 1200){  
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay >= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else {
    console.log('Что то пошло не так');
  }
}

console.log(money);
console.log(typeof income);
console.log(!!deposit);
console.log(addExpenses.length);
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));
console.log(budgetMonth);
console.log(Math.floor(budgetDay));
console.log(Math.ceil(period));