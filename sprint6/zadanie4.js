/*
  Zadanie 4. Napisz funkcję, która przyjmie liczbę całkowitą i wypisze wszystkie liczby
  od tej liczby całkowitej do 100. Jeżeli użytkownik poda liczbę większą niż 100, poinformuj
  go żeby wpisał mniejszą liczbę niż 100
*/

function showUser(number) {
    if (number < 100) {
      console.log(number);
    } else {
      console.log('Fill in this a smaller number than 100, please.');
    }
  }
showUser(29);
