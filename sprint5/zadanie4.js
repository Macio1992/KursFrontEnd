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

/* Ja stworzyłam funkcję o nazwie getLAstItem tablicę zawierającą 3 elementy. Indeks ma 2. Funkcja "getLastItem" bierze jeden argument nazwany "arr". Parametry funkcji to liczby. Parametry znajdują się w tablicy. Parametry to wartości. Włąśćiwość "length" zawiera liczbę elementów tablicy. Instrukcja return określa wartość zwracanej funkcji. Funkcja zwraca "getLastItem"  swojego argumentu "arr" (gdzie "arr" jest liczbą). Wszystkie parametry są przekazywane do funkcji przez wartość. Pierwsza wartość w tablicy ma indeks 0, druga 1, trzecia 2 i tak dalej, az do ostatniego indeksu, który wynosi arr.length -1.
W jej wnętrzu znajduje się instrukcja return wynik działania funkcji, która pobiera ostatni element z tablicy. Wywołanie "getLastItem" wykonuje kod funkcji, która go wysyła.
Wartość jest zwracana do kodu wywołującego (przypisanego "getLastItem").*/
