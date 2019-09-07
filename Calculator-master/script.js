/* jshint esversion: 6 */

const calculatorContainer = document.getElementById('calculatorContainer');
const numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
const numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');
const addingOperation = calculatorContainer.querySelector('[data-calculator-operation-adding]');
const substractiongOperation = calculatorContainer.querySelector('[data-calculator-operation-substraction]');
const multiplicationOperation = calculatorContainer.querySelector('[data-calculator-operation-multiplication]');
const divisionOperation = calculatorContainer.querySelector('[data-calculator-operation-division]');
const resultContainer = calculatorContainer.querySelector('[data-calculator-result-value]');
const operations = document.getElementsByClassName('calculator__calculate');

addingOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla dodawania */

  let numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  let numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  let sum = 0;
  sum = number(numberValue1) + number(numberValue2) 
});

substractiongOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla odejmowania */

  let numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  let numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  let sub = 0; 
  sub = numberValue1 - numberValue2
});

multiplicationOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla mnożenia */

  let numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  let numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  let multiplication = 0; 
  multiplication = numberValue1 * numberValue2
});

divisionOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla dzielenia */

  let numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  let numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  let division = 0; 
  division = numberValue1/numberValue2;
});
