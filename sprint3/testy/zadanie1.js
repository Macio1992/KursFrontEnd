/* Napisz funkcję, która zwróci podany w parametrze wiek */

function getAge(age) {
  return age;
}

/* Napisz funkcję, która przyjmie parametr imię i zwróci je */

function getName(name) {
  return name;
}
console.log(getName('Ewa'));

/* Napisz funkcję, która przyjmie imie i wypisze w konsoli */
function getName2(name) {
  console.log(name);
}
getName2('Tomek');

/* Napisz funkcję, która przyjmie dwie liczby, doda je i zwróci wynik tego dodawania */
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(1, 6));

/* Napisz funkcję, która zwróci tablicę liczb od 1 do 5 */
function getNumbers() {
  return [1, 2, 3, 2, 2, 3, -6, 1, 2];
}
console.log(getNumbers());

/* Napisz funkcję, która przyjmie liczbę i sprawdzi czy ta liczba jest w tablicy, którą zwraca funkcja getNumbers() */
function checkIfNumberExists(num) {
  let numbers = getNumbers();

  for (let i = 0; i < 5; i++) {
    if (numbers[i] === num) {
      return true;
    }
  }

  return false;
}

console.log(checkIfNumberExists(6)); // false
console.log(checkIfNumberExists(2)); // true
console.log(checkIfNumberExists(0)); // false
console.log(checkIfNumberExists(5)); // true


/* napisz funkcję która przyjmie liczbę i policzy ile razy ta liczba występuje w tablicy którą zwraca funckja getNumbers() */
function countNumber(num) {
  let counts = getNumbers();
  let x = 0;

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === num) {
      x++;
    }
  }

  return x;
}

console.log(countNumber(1)); // => 2
console.log(countNumber(2)); // => 4
console.log(countNumber(3)); // => 2
