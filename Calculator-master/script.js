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

  const numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  const numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  var sum = 0;
  sum = number(numberValue1) + number(numberValue2);
  
});

substractiongOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla odejmowania */

  const numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  const numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  var sub = 0; 
  sub = numberValue1 - numberValue2;

  
});

multiplicationOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla mnożenia */

  const numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  const numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  var multiplication = 0; 
  multiplication = numberValue1 * numberValue2;


});

divisionOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla dzielenia */

  const numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
  const numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');

  var division = 0; 
  division = numberValue1/numberValue2

});
