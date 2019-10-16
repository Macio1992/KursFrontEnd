// let x = 7;
// let y = x;

// console.log('x = ' + x); // 7
// console.log('y = ' + y); // 7

// x = 90;

// console.log('x = ' + x); // 90
// console.log('y = ' + y); // 7

/* zmienne prymitywne (number, string, booelan):
  przy przypisywaniu wartości, przypisywana jest wartość

  zmienne referecnycjne (object)
  przy przypisywaniu wartości, przypisywana jest referencja
*/

let task1 = {
  title: 'Task1'
};
let task2 = task1;

console.log('Task1 ', task1);
console.log('Task2 ', task2);

task1 = {
  title: 'Title2'
};

console.log('Task1 ', task1);
console.log('Task2 ', task2);
