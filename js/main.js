let money = 1200,
    income = ' подработка ',
    addExpenses = 'тренажерка, квартира, коммуналка, интернет',
    deposit = true,
    mission = 6000,
    period = 6,
    budgetDay = (money / 30);

  console.log(typeof money);
  console.log(typeof income);
  console.log(typeof deposit);
  console.log(addExpenses.length);
  console.log('Период равен ' + period + ' месяцев ');
  console.log('Цель заработать ' + mission + ' долларов');
  console.log(addExpenses.toLocaleLowerCase());
  console.log(addExpenses.split(', '));
  console.log(budgetDay);


  

