'use strict';

let name = prompt('Привет, как тебя зовут?', 'Mary');

while (name == '' || name == null) {
  name = prompt('Привет, как тебя зовут?');
}

confirm ('Давай сыграем в игру!');

let number = Math.ceil(Math.random() * 100);
alert ('Число которое я загадал : ' + number);

let guess = prompt('Угадай число от 1 до 100');
let countGuesses = 0;

while (guess != number) {
  if (guess > number){
    guess = prompt('Загаданное число меньше, попробуйте еще раз');
    countGuesses = countGuesses +1;
  }
  if (guess < number){
    guess = prompt('Загаданное число больше, попробуйте еще раз');
    countGuesses = countGuesses +1;
  } 
}

alert('Поздровляю вы угадали! Загаданное мною число : ' + number + ' Вам понадобилось : ' + countGuesses + ' попыток.');

