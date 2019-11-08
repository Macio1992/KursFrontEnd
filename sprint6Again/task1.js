/*
  Stwórz funkcję która przyjmie tablicę liczb całkowitych, odwróci zawartość tej tablicy
  i zwróci tę odwróconą tablicę. Jeżeli użytkownik poda coś innego niż tablicę, zamiast zwracać
  odwróconą tablicę, funkcja niech zwraca pustą tablicę.
 */

// First example
function reverseTable (arr) {
  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  return array;
}

//Second example
function reverseTable1() {
	return [];
}

/* Encyklopedia: Opisz podstawowe metody string: push, pop, unshift, shift, indexOf, splice */
