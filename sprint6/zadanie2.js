/*
  Zadanie 2. Stwórz funkcję, która przyjmie tablicę liczb całkowitych i zwróci ich sumę.
*/

function calcNumber (arr) {
  let sum = 0;
  for( let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(calcNumber([2,4,5]));
