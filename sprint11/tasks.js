/*
    Zadanie 1. Stwórz funkcję, która przyjmuje tablicę zmiennych typu string, i zwraca
    posortowaną tablice tych zmiennych typu string posortowną według długości zmiennych
    typu string, rosnąco.

    np. mamy tablicę: ['aaaa', 'a', 'aaa', 'aa'],
    funkcja ma nam zwrócić tablicę posortowaną rosnąco: ['a', 'aa', 'aaa', 'aaaa']

    np. mamy tablicę ['Google', 'Apple', 'Microsoft']
    funkcja ma nam zwrócić tablicę posortowaną rosnąco: ['Apple', 'Google', 'Microsoft']

    np. mamy tablice ['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']
    funkcja ma nam zwrócić tablicę posortowaną rosnąco: ['Raphael', 'Leonardo', 'Donatello', 'Michelangelo']
*/

// function sortArray(a, b) {
//   return a.length - b.length;
// }

// const tab = ['Leonardo', 'Michelangelo', 'Raphael', 'Donatello'];

// const tab2 = tab.sort(sortArray);
// console.log(tab2);

function sortArray(arr) {
  arr.push();

  arr.sort(function(a, b) {
    return a.length-b.length;
  });
  return [arr];
}
