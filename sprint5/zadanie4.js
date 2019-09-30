/*Return the Last Element in an Array
Create a function that accepts an array and returns the last item in the array.

Examples
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/

function getLastItem(arr) {
  return arr[arr.length -1];
}

/* Kod tworzy getLastItem tablicę zawierającą 3 elementy. Indeks ma 2.
Parametry (element) funkcji są przechowywane w strukturze arguments. Włąśćiwość "length" zawiera liczbę elementów tablicy.
arr.lenght -1 tworzymy wartość o jeden mniejszą niz długość naszej tablicy. Pierwsza wartość w tablicy ma indeks 0, druga 1, trzecia 2 i tak dalej, az do ostatniego indeksu, który wynosi arr.length -1. Usuwamy ostatni element i zwraca go.
Mozna zrobić za pomocą metody arr.pop() zabiera ostatni element z tablicy i go zwraca.*/
