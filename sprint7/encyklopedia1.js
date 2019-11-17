/*Constructor function
Słowo kluczowe “this” w kontekście funkcji*/

/*
Funkcję Constructor function tworzymy w celu nowe obiekty dla uzytkowników aplikacji,
kont bankowych, samochodów lub cokolwiek innego, które mają te same właściwości i metody.
Constructor to zwykła funkcja, pisana z wielkiej litery.

Aby utworzyć nowe obiekty z funkcji kosntruktora i nowego operatora nalezy wykonać wielką literą.

Na przykład;

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

let person1 = new Person('Evita', 'Steinke' );

function Person() jest funkcją konstruktora.
Zeby stworzyć nową instancję funkcji i kontruktora nalezy skorzystać ze słowa kluczowego 'new'.

W ciele funkcji definiowane są właściwości i metody obiektu.
Właściwości i metody przypisywane są do zmiennej "this".

Zwykłe funkcje słowem return zwracają wartość funkcji, natomiast konstruktora zwracają wartości
przez funkcję konstruującą. Metoda konstruująca zwraca wartość zmiennej 'this'.

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
