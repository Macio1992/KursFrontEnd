/*
  Zadanie 5. Napisz funkcję, która przyjmie dwie liczby całkowite: `begin` i `end`
  i wypisze wszystkie liczby od `begin` do `end`.
  Jeżeli użytkownik poda większą liczbę `end` niż `begin`, poinformuj go żeby podał odwrotnie
*/

function myFunc (a, b) {
  if (a < b) {
    console.log(3,4,5,6,7,8,9,10);
  } else {
    if (b > a) {
      console.log("Zle podałeś");
    }
  }
}
myFunc(3, 10);