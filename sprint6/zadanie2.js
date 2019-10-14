/*
  Zadanie 2. Stwórz funkcję, która przyjmie tablicę liczb całkowitych i zwróci ich sumę.
*/

function integerNumber (arr) {
  let sum = 0;
  for( let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

/*Stworzyłam funkcję o nazwie "integerNumber", która przyjmuje jeden parametr "arr".
W fukncji stworzyłam zmienną lokalną, która jest zerową.
Pętla zaczyna się od początku, warunek pętli odczytuje i-ty element tablicy,
w kazdym obiegu pętli zmienna i jest większa o jeden, w ciele pętli sumujemy
kazdej wartości. Funkcja zwraca wyliczoną wartość do miejsca wywołania
i kończy wykonywanie funkcji.*/
