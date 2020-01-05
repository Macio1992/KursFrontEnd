/*
  Stwórz globalną tablię liczb w tym pliku o nazwie 'numbers'. Dodaj tam liczby:
  [45, 56, 1, -4, 6, 7, 8, 9]
  Zadanie 1. Stwórz funkcję o nazwie 'findNumberIndex()'. Niech funkcja przyjmie jeden parametr o nazwie 'number'.
  Jeżeli 'number' istnieje w tablicy 'numbers', niech funkcja zwróci jej indeks.
  Jeżeli 'number' nie istnieje w tablicy, niecj funkcja zwróci -1.

  Np.
  findNumberIndex(6) powinna zwrócić 4
  findNumberIndex(9) powinna zwrócić 7
  findNumberIndex(45) powinna zwrócić 0
  findNumberIndex(999) powinna zwrócić -1
  findNumberIndex(99) powinna zwrócić -1
*/

let numbers = [45, 56, 1, -4, 6, 7, 8, 9];

function findNumberIndex(number) {
  for (let i = 0; i < numbers.length; i++) {
    if (number == numbers[i]) {
      return i;
    }
  }
  return -1;
}
