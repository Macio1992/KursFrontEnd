/*
  Zadanie 1. Stwórz funkcję, zadeklaruj w niej tablicę kilku liczb całkowitych,
  oblicz sumę liczb z tablicy i wypisz do konsoli tę sumę.
*/
function addNumber () {
  let arr = [1,2,4,6,8,9,10];
  let suma = 0;
    for (let i = 0; i < arr.length; i++ ) {
      suma += arr[i];
    }
  }
  console.log(addNumber());