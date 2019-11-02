/*
Zadanie 2. Stwórz funkcję, która przyjmie tablicę liczb całkowitych i zwróci ich sumę.
*/

function returnTheSumOfTheNumbersOfAnArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/*
Stworzyłam funkcję o nazwie "returnTheSumOfTheNumbersOfAnArray", która przyjmuje jeden parametr "arr".
Stworzyłam zmienną lokalną o nazwie sum, do której przypisuje wartość zerową.
W kazdej iteracji pętli wykonywane jest sumowanie kolejnych elementów tablicy
liczb całkowitych. Funkcja zwraca wynik sumy.
*/
