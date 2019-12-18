/*
  Zadanie 1. Stwórz funkcję, która przyjmuje tablicę zmiennych typu string, i zwraca
  posortowaną tablice tych zmiennych typu string posortowną według długości zmiennych
  typu string, rosnąco.

  np. mamy tablicę: ['aaaa', 'a', 'aaa', 'aa'],
  funkcja ma nam zwrócić tablicę posortowaną rosnąco: ['a', 'aa', 'aaa', 'aaaa']

  np. mamy tablicę ['Google', 'Apple', 'Microsoft']
  funkcja ma nam zwrócić tablicę posortowaną rosnąco: ['Apple', 'Google', 'Microsoft']

  np. mamy tablice ['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']
  funkcja ma nam zwrócić tablicę posortowaną rosnąco: ['Raphael', 'Leonardo', 'Donatello', 'Michelangelo']
*/

// Przekaż do funkcji tablicę o nazwie "elements"
// Stwórz pomocniczą tablice "sortedElements"
// Znajdź najmniejszy element w tablicy "elements", dodaj go do tablicy "sortedElements", usuń ten element z tablicy "elements" (Powtarzaj ten krok aż do momemntu gdy tablica "elements" nie będzie pusta)
// Zwróc tablicę sortedElements

// Wariant 1 (przykład 1,2)
function sortedArray(elements) {
  let sortedElements = [];
  let min = elements[0];

  for (let i = 0; i < elements.length; i++) {
    elements.splice(1,1);
    if (min > elements[i]) {
      min = elements[i];
      sortedElements.push(elements[i]);
    }
  }
  return min;
}

// Wariant 2 (przykład 3)
function sortedArray(elements) {
  let sortedElements = [];
  let min = elements[0];

  for (let i = 0; i < elements.length; i++) {
    elements.splice(2,1);
    if (min < elements[i]) {
      min = elements[i];
      sortedElements.push(elements[i]);
    }
  }
  return min;
}
