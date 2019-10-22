/*
  Zadanie 5. Napisz funkcję, która przyjmie dwie liczby całkowite: `begin` i `end`
  i wypisze wszystkie liczby od `begin` do `end`.
  Jeżeli użytkownik poda większą liczbę `end` niż `begin`, poinformuj go żeby podał odwrotnie
*/

function takeNumber (begin, end) {
  if( begin < end) {
    for (let i = begin; i <= end; i++) {
      console.log(i);
  }
  } else {
    console.log('You entered the numbers incorrectly. The beginning should be bigger than the end');
  }
}

/*Stworzyłam funkcję o nazwie "takeNumber", która przyjmuje
dwa parametry 'begin' i 'end'. Pierwsza instrukcja warunkowa
sprawdza, czy wartość begin jest mniejsza od end, będzie to
oznaczało, ze liczba mieści się w przedziale od 3 do 10 i wypisze
wszystkie liczby. Jezeli drugi warunek nie zostanie spełniony, zostanie
wykonana i wyświetli komunikat.*/
