/*
  Zadanie 1. Stwórz funkcję, zadeklaruj w niej tablicę kilku liczb całkowitych,
  oblicz sumę liczb z tablicy i wypisz do konsoli tę sumę.
*/

  function addNumber () {
  let arr = [1,2,4,6,8,9,10];
  let sum = 0;
    for (let i = 0; i < arr.length; i++ ) {
      return sum += arr[i];
    }
  }
  console.log(addNumber());

/*
  Zadanie 2. Stwórz funkcję, która przyjmie tablicę liczb całkowitych i zwróci ich sumę.
*/

  function calcNumber (a , b, c) {
    return a + b + c;
  }
  console.log(calcNumber(3, 5, 6));

/*
  Zadanie 3. Napisz funkcję, która wypisze wszystkie liczby od 0 do 100
*/

function getNumber() {
  for (let i = 0; i <= 100; i++) {
    console.log(0,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100);
  }
}

/*
  Zadanie 4. Napisz funkcję, która przyjmie liczbę całkowitą i wypisze wszystkie liczby
  od tej liczby całkowitej do 100. Jeżeli użytkownik poda liczbę większą niż 100, poinformuj
  go żeby wpisał mniejszą liczbę niż 100
*/

/*
  Zadanie 5. Napisz funkcję, która przyjmie dwie liczby całkowite: `begin` i `end`
  i wypisze wszystkie liczby od `begin` do `end`.
  Jeżeli użytkownik poda większą liczbę `end` niż `begin`, poinformuj go żeby podał odwrotnie
*/
