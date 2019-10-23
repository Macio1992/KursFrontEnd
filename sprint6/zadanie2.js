/*
  Zadanie 2. Stwórz funkcję, która przyjmie tablicę liczb całkowitych i zwróci ich sumę.
*/

function sumNumber (arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

/*Stworzyłam funkcję o nazwie "sumNumber", która przyjmuje jeden parametr "arr".
Stworzyłam zmienną lokalną o nazwie sum, do której przypisuje wartość zerową.
Pętla wykonuje się przy kazdej iteracji, która sumuje wszystkie parametry.
Funkcja zwraca wynikk sumy.*/
