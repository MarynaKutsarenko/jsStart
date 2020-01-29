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
    return expensesMonth;
}
// We have required month necessary expenses
const expensesMonth = getExpensesMonth(requiredExpense1.questionCost , requiredExpense2.questionCost);

// The function requests interactively information about month accumulate
function getAccumulatedMonth(total, expenses) {
  const accumulatedMonth = (total - expenses);
    return accumulatedMonth;
}
// We have required month accumulate
const accumulatedMonth = getAccumulatedMonth(money, expensesMonth);

// The function requests interactively information about time which take to get accumulate money
function getTargetMonth(sum, total) {
  const targetMonth = (sum / total);
    return targetMonth;
}
// We have required save up money per period
const targetMonth = getTargetMonth(mission, accumulatedMonth);

//calculate the daily budget based on monthly savings
let budgetDay = accumulatedMonth / 30 ;

/** The function requests interactively information about condition design with budgetDay*/
const getStatusIncome = function () {
  if (budgetDay >= 1200){  
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay >= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else {
    console.log('Что то пошло не так');
  }
};
getStatusIncome ();

// The function show type of data
const shoeTypeOf = function (data) {
  console.log(typeof(data));
};

shoeTypeOf(money);
shoeTypeOf(income);
shoeTypeOf(deposit);

console.log(addExpenses.split(', '));
console.log(targetMonth);
console.log();