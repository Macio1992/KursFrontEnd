/*
Zadanie 1. Stwórz funkcję, zadeklaruj w niej tablicę kilku liczb całkowitych,
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
Zadeklarowałam dwie zmienne o nazwie arr i sum. Zmienna "arr",
jest przypisywana wartość liczby naturalnej w tablicy,
następnie zmienna "sum" jest przypisywana wartość zerową.
Pętla wykonuje się przy kazdej iteracji,
która sumuje wszystkie elementy tablicy.
*/
