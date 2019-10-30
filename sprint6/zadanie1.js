/*
Zadanie 1. Utwórz funkcję, zadeklaruj w niej tablicę kilku liczb całkowitych,
oblicz sumę liczb z tablicy i wypisz do konsoli tę sumę.
*/

function sumNumber() {
  let arr = [1,2,3,4,5,6,7,8,9,10];
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  console.log(suma);
}

/*
Stworzyłam funkcję o nazwie "sumNumber".
W funkcji zadeklarowałam zmienne o nazwie arr i sum.
Do zmiennej "arr" przypisywana jest wartość tablicy liczb naturalnych,
następnie stworzyłam zmienną lokalną o nazwie "sum",
do której przypisuje wartość zerową. W kazdej iteracji pętli wykonywane
jest sumowanie kolejnych elementów tablicy. Funkcja wywołuje wynik sumy.
*/
