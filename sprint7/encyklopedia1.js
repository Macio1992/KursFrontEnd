/*Constructor function
Słowo kluczowe “this” w kontekście funkcji*/

/*
Constructor function to zwykła funkcja, pisana z wielkiej litery.
Stworzymy przykładowy konstruktor zwykły {..}, którego stworzymy nowe obiekty:

let Person = {
  firstName: 'John',
  lastName: 'Doe'
};

Chcę pracować z wieloma obiektami, które mają te same cechy czyli te same właściwości i metody.
Mogą to być uzytkownicy aplikacji, kont bankowych, samochodów lub cokolwiek innego.

Aby utworzyć nowe obiekty z funkcji kosntruktora i nowego operatora.
Najpierw są nazywane wielką literą i powinny być wykonane z "new" operatorem.
Na przykład;

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

let person1 = new Person('Evita', 'Steinke' );

Osoba function Person() jest funkcją konstruktora obiektu. Jego celem jest tworzenie nowych obiektów reprezentujących
rózne osoby. Kazda osoba będzie miała imię i nazwisko, które są podane jako parametry tej funkcji.
Następnie tworzymy konkretną instancję osoby z imieniem Evita i nazwisko Steinke.
Przed wywołaniem funkcji konstruktora Person pojawiło się nowe słowo kluczowe.

W ciele funkcji definiowane są właściwości i metody obiektu tworzonego przez dany konstruktor.
Właściwości i metody przypisywane są do zmiennej "this".


Zwykłe konstruktory nie mają "return" instrukcji. Ich zadaniem jest zapisanie wszystkich niezbędnych rzeczy
"this". Innymy słowy, "return" gdy obiekt zwraca ten obiekt, we wszystkich przypadkach "this" jest
zwracany.

Na przykład "return" zastępuje "this", zwracając obiekt:

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
