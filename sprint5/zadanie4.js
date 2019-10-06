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

/* Stworzyłam funkcję "getLastItem", która przyjmuje jeden parametr "arr".
Właściwość "length" zawiera liczbę elementów tablicy.
Instrukcja return określa wartość zwracanej funkcji.
Funkcja zwraca ostatni element w tablicy.
Pierwsza wartość w tablicy ma indeks 0, druga 1, trzecia 2 i tak dalej,
az do ostatniego indeksu, który wynosi arr.length -1.*/

