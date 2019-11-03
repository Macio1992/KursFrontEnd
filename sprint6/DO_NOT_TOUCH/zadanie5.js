/*
  Zadanie 5. Napisz funkcję, która przyjmie dwie liczby całkowite: `begin` i `end`
  i wypisze wszystkie liczby od `begin` do `end`.
  Jeżeli użytkownik poda większą liczbę `end` niż `begin`, poinformuj go żeby podał odwrotnie
*/

function writeNumbersFromTheRange(begin, end) {
  if (begin < end) {
    for (let i = begin; i <= end; i++) {
      console.log(i);
    }
  } else {
    console.log('You entered the numbers incorrectly. The beginning should be bigger than the end');
  }
}

/*
Stworzyłam funkcję o nazwie "writeNumbersFromTheRange", która przyjmuje
dwa parametry 'begin' i 'end'. W funkcji pierwsza instrukcja warunkowa
sprawdza, czy wartość begin jest mniejsza od end, jeśli tak, wyświetli
wszystkie liczby naturalne. W przeciwnym razie, kiedy warunek jest fałszywy
wykonane zostanie polecenie po instrukji else. Po wywołaniu funkcji zostaje
wyświetlony komunikat ('You entered the numbers incorrectly. The beginning
should be bigger than the end').
*/
