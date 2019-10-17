/*
  Zadanie 2. Stwórz funkcję, która przyjmie tablicę liczb całkowitych i zwróci ich sumę.
*/

function copyNumber (arr) {
  let sum = 0;
  for( let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

/*Stworzyłam funkcję o nazwie "copyNumber", która przyjmuje jeden parametr "arr".
Stworzyłam zmienną lokalną o nazwie sum, do której przypisuje wartość zerową.
Pętla sprawdza długość tablicy odpowiada liczbie jej elementów.
Do sumy dodajemy kolejne liczby z tablicy. Funkcja zwraca wyliczoną wartość liczb całkowitych.*/
