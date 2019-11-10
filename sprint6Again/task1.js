/*
  Stwórz funkcję która przyjmie tablicę liczb całkowitych, odwróci zawartość tej tablicy
  i zwróci tę odwróconą tablicę. Jeżeli użytkownik poda coś innego niż tablicę, zamiast zwracać
  odwróconą tablicę, funkcja niech zwraca pustą tablicę.
 */

function reverseArray(arr) {
  let array = [];

  if (Array.isArray(arr)) {
    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }
    return array;
  }
  return [];
}
