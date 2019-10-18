/*
  Zadanie 5. Napisz funkcję, która przyjmie dwie liczby całkowite: `begin` i `end`
  i wypisze wszystkie liczby od `begin` do `end`.
  Jeżeli użytkownik poda większą liczbę `end` niż `begin`, poinformuj go żeby podał odwrotnie
*/

function takeNumber (begin, end) {
  for (let i = begin; i <= end; i++) {
    if ( begin < end) {
      console.log(i);
    } else {
      if (begin > end) {
        console.log('You entered the numbers incorrectly. The beginning should be bigger than the end');
      }
    }
  }
}
