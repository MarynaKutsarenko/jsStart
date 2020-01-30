'use strict';

const money = +prompt('Ваш месячный доход?', '1000'),       // money of month income 
      deposit = confirm('Есть ли у вас депозит в банке?'),  //credit story in the bank
      income = ' подработка ',                              //extra money
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'тренажерка, квартира, интернет') ,          // regular exppenses per month
      mission = 6000;                                       //purpose to accumulate for a period 

 /** The function requests interactively information about  name and cost of a single required expense.@returns {{questionCost: number, questionSpending: string}} */
function getRequiredExpense() { 
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
  return expenses1 + expenses2;
}
// We have required month necessary expenses
const expensesMonth = getExpensesMonth(requiredExpense1.questionCost , requiredExpense2.questionCost);

// The function requests interactively information about month accumulate
function getAccumulatedMonth(total, expenses) {
  return total - expenses;
}
// We have required month accumulate
const accumulatedMonth = getAccumulatedMonth(money, expensesMonth);

// The function required save up money per period
function getTargetMonth(sum, total) {
  return sum / total;
}
// We have required save up money per period
const targetMonth = getTargetMonth(mission, accumulatedMonth);

//calculate the daily budget based on monthly savings
const budgetDay = accumulatedMonth / 30 ;

/** The function requests interactively 
 * information about condition design with budgetDay*/
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
const showTypeOf = function (data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log('Месячный доход :', money) ;
console.log('Дополнительный доход :',income);
console.log('Наличие кредита :',deposit);
console.log('Бюджет на день :', parseInt(budgetDay));
console.log('Постоянные расходы :', addExpenses.toLowerCase().split(', '));
console.log('Длина массива <обязательные расходы>:', addExpenses.length);
console.log('Накопления за месяц:', accumulatedMonth);
console.log('Период за который будут накоплена нужная сумма:', Math.ceil(targetMonth));
