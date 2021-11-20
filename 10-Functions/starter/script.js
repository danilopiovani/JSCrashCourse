'use strict';
/*
const firstLetterUpper = function (str) {
  let finalWord = '';
  for (const word of str.split(' ')) {
    const firstLetter = word.charAt(0).toUpperCase();
    const otherLetters = word.slice(1, word.length).toLowerCase();
    finalWord += firstLetter + otherLetters + ' ';
  }

  return finalWord;
};

const allWordUpper = function (str) {
  return str.toUpperCase();
};

const transformWord = (str, fn) => {
  console.log(`Original str: ${str}`);
  console.log(`Transformed by fn: ${fn.name}`);
  console.log(`str: ${fn(str)}`);
};

//transformWord('danilo piovani', firstLetterUpper);

//transformWord('Developer Java Script', allWordUpper);

//transformWord('DEVELOPER JAVA SCRIPT', firstLetterUpper);

//const greet = greeting => name => console.log(`${greeting} ${name}`);
//greet('Hello')('Danilo');
/*
const addTax = (rate, value) => value + value * rate;
const addVat = addTax.bind(null, 0.23);

//console.log(addVat(300));

const addTaxRate = rate => value => console.log(value + value * rate);

const addVAT2 = addTaxRate(0.3);

addVAT2(200);
*/
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

const promptAll = extraInfo => {
  let optFinal = '';
  for (const opt of poll.options) {
    optFinal += opt + '\n';
  }
  return window.prompt(
    `${poll.question} \n ${optFinal}(Write option number) \n\n ${extraInfo}`
  );
};

document.querySelector('.poll').addEventListener('click', function () {
  const answerUser = promptAll('');

  if (!Number(answerUser) || answerUser < 0 || answerUser > 3) {
    promptAll('Enter a valid Number');
  } else {
    poll.answers[answerUser] += 1;
  }

  console.log(poll.answers);
});

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
