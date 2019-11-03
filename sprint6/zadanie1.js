/*
Zadanie 1. Stwórz funkcję, zadeklaruj w niej tablicę kilku liczb
całkowitych, oblicz sumę liczb z tablicy i wypisz do konsoli
tę sumę.
*/

function writeTheSumOfTheNumbers() {
  let arr = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

/*
Stworzyłam funkcję o nazwie "writeTheSumOfTheNumbers".
W funkcji zadeklarowałam zmienne o nazwie arr i sum.
Do zmiennej "arr" przypisywana jest wartość tablicy liczb naturalnych,
następnie stworzyłam zmienną lokalną o nazwie "sum",
do której przypisuje wartość zerową. W kazdej iteracji pętli wykonywane
jest sumowanie kolejnych elementów tablicy.
*/
