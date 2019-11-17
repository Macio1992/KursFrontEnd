/*Constructor function
Słowo kluczowe “this” w kontekście funkcji*/

/*
Funkcja Constructor function tworzy obiekty, które mają te same właściwości i metody. Aby to uzyskać, trzeba je dodać wewnątrz funkcji do obiektu 'this'.
Ta funkcja polega na zapisywaniu nazw konstruktorów wielką literą. Mozna uzyć funkcji konstruktora do stworzenia wielu podobnych obiektów.

Konstruktory są zwykłymi funkcjami wywoływanymi przez operator 'new'.

Na przykład;

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

let person1 = new Person('Evita', 'Steinke' );

function Person() jest funkcją konstruktora. Nazwa Person() jest zapisana wielką literą. Konstruktor Person() przyjmuje dwa parametry i przypisuje jego wartość do właściowości firstName i lastName obiektu this.
Obiekt 'this' jest automatycznie tworzony przez operator 'new' w chwili wywoływawania konstruktora.

Natomiast funkcje konstruktor zwracają cały nowo stworzony obiekt. Metoda konstruująca zwraca wartość zmiennej 'this'.

function Person() {
  this.name = 'John';

  return {name: "Przemek"}; --> returns this object
}
console.log(new Person().name); --> Przemek, got that object

Kolejny przykład z pustym "return":

function Person() {
  this.name = 'John';
  return; --> returns this
}
console.log(new Person().name); --> John
*/
