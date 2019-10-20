/*
  Zadanie 4. Napisz funkcję, która przyjmie liczbę całkowitą i wypisze wszystkie liczby
  od tej liczby całkowitej do 100. Jeżeli użytkownik poda liczbę większą niż 100, poinformuj
  go żeby wpisał mniejszą liczbę niż 100
*/

function writeNumber(n) {
  if(n<=100)
  for (let i=0; i<=n; i++){
    console.log(i);
  } else {
    console.log('You entered the numbers incorrectly. The number should by smaller than 100.');
  }
}
