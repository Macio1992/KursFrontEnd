/*
  Zadanie 1. Stwórz funkcję, zadeklaruj w niej tablicę kilku liczb całkowitych,
  oblicz sumę liczb z tablicy i wypisz do konsoli tę sumę.
*/

  function sumNumber() {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = suma + arr[i];
        arr[i]++;
  }
  console.log(suma);
  }
