/*
  IIFE
  JSON
  call, apply, bind
*/

/*
  Zad. 1

  IIFE (Immediately-invoked function expressions)- jest to funkcja
  samowykonująca się, czyli natychmiastowe wywołanie
  wyrazeń funkcyjnych. Jej konstrukcja polega na zamknięciu całej
  funkcji w nawiasy (moze być funkcja anonimowa) i natychmiastowym
  jej wywołaniu.

Przykład funkcji:

NORMALNA FUNKCJA

function sayHi() {
  console.log("Hello, world!");
}

sayHi();

Linie 18-20 definiują o nazwie sayHi. W linii 22 wywołujemy ją
ze zwykłą składnią "()", aby wywołać funkcję.
Tworzenie funkcji nazywa się "definicją funkcji" lub
"deklaracją funkcji lub "instrukcją funkcji".

WYRAZENIA FUNKCYJNE

let msg = "Hello, world!";
let sayHi = function() {
  console.log(msg);
};

sayHi();

Wiersze 32-34 deklarują zmienną sayHi i przypisują do niej wartość
typu funkcji. Linia 36 wywołuje tę funkcję sayHi.
W wierszach 32-34 przypisaliśmy wartość typu funkcji do zmiennej
o nazwie sayHi. W powyzszym przykladzie funkcja po prawej stronie
operatora przypisana jest nazywana "wyrazeniem funkcji". Są one
wszędzie w JavaScript. Powyzszy przykład był anonimowym wyrazeniem
funkcji. Są anonimowi, poniewaz nie mają nazwy po słowie kluczowym
funkcji.

Wyrazenia funkcyjne mogą mieć nazwy.

let fibo = function fibonacci() {
(tutaj mozna uzyć 'fibonacci ()', poniewaz to wyrazenie function ma
nazwę.)
};
(fibonacci() tutaj zawodzi, ale fibo() działa).

KLASYCZNY STYL IIFE

(function() {
  console.log("Nie jestem jeszcze IIFE");
});

W powyzszym kodzie wyrazenie funkcyjne jest owinięte w nawiasach w
wierszach 57-59. Nie jest to jeszcze IIFE, poniewaz to wyrazenie
funkcyjne nigdy nie jest wykonywane.

Wariant 1
(function() {
  console.log("Jestem IIFE!");
} ());

Wariant 2
(function() {
  console.log("Ja tez jestem IIFE");
}) ();

W wariancie 1, w wierszu  68, nawiasy "()" do wywołania wyrazenia
funkcji są zawarte w nawiasach zewnętrznych. Zewnętrzne nawiasy są
potrzebne aby utworzyć wyrazenie funckji na podstawie tej fukncji.

W wariancie 2, w wierszu 73, nawiasy "()" do wywołania wyrazenia
funkcyjnego znajdują się poza nawiasami otaczającymi dla wyrazenia
funkcyjnego.

Zmieniając uzycie IIFE, umieszcza zmienną w zasięgu funkcji,
co oznacza, ze nie mozna uzyskać do niej dostępu poza funkcją:

(function() {
  let secret = '123';
})();

Zwykle tworzymy funkcję, a następnie wywołujemy ją pózniej:

function hello(name) {
  console.log('hi there, ' + name + '!')
}

hello('Lisa');

Mozemy tez wywołać funkcję 'natychmiast' po jej funkcji:

(function hello(name) {
  console.log("hi there, " + name + "!")
}) ("Jennifer");

hello('Tom') -> ReferenceError: hello is not defined

W powyzszym przykładzie kodu definiujemy funkcję "hello"
i wywołujemy ją natychamiast, prekazując parametr "Jennifer".
Typ funkcji wywoływania, IIFE wykonuje się raz i to wszystko.
Nie mozna wywoływać go osobno, która funkcja nie jest widoczna
podczas próby "hello('Tom')".

IIFE z PARAMETRAMI

(function IIFE(msg, times) {
  for (var i = 1; i <= times; i++) {
    console.log(msg);
  }
}("Hello!", 5));

W wierszu 114 IIFE ma dwa parametry o nazwie msg, times.
Kiedy wykonujemy IIFE w wierszu 118, zamiast pustych nawiasów (),
przekazujemy argumenty do IIFE. Linie 115 i 116 uzywają tych
parametrów wewnątrz IIFE.

Zad. 2

JSON to skrót od JavaScript Obcject Notation. JSON to sposób
na przechowywanie i przekazywanie danych za pomocą zwykłego tekstu.
Generowanie struktur danych na podstawie danych wprowadzonych przez
uzytkownika.Przesyłanie danych z serwera do klienta, klienta
na serwer i serwera na serwer. Konfiguracja i weryfikacja danych.

FORMAT JSON

Format JSON wywodzi się ze składni obietków JavaScript. Jest to format
danych klucz-wartość, który jest renderowany w nawiasach klamrowych.

Podczas pracy z ".json" plikiem będzie on wyglądał następująco:

{
  "first_name":  "Sammy",
  "last_name":  "Shark",
  "online":  true
}

Jeśli zamiast tego obiekt JSON w pliku ".js" lub "html", jest ustawiony
na zmienną:

let sammy = {
  "first_name":  "Sammy",
  "last_name":  "Shark",
  "online":  true
}

W dodatku mozna widzieć JSON jako ciąg zamiast obiektu w kontekście pliku
programu lub skryptu JavaScript. W takim przypadku mozna zobaczyć to
wszystko w jednym wierszu:

let sammy = '{"first_name": "Sammy", "last_name": "Shark", "location": "Ocean"}';

Przekształcenie obiektów JSON w ciągi znaków moze być przydatne do
szybkiego przesyłania danych.

PDOSTĘP DO DANYCH JSON

Przykład

let contacts = {
  "name": "Timothy",
  "age": 35,
  "address": {
    "street": "1 Main St",
    "city": "Montreal"
  },
  "interests": ["cooking", "biking"]
}

Mozna uzyskać dostep do naszych danych JSON za pośrednictwem konsoli za
pomocą notacji kropkowej:

contacts.name            // Timothy
contacts.age             // 35
contacts.address.street  // 1 Main St
contacts.address.city    // Montreal
contacts.interests[0]    // cooking
contacts.interests[1]    // biking

Gdy chcemy przenieść lub przechowywać nasze dane, bardzo przydatne jest
przekonwertowanie naszego obiektu JSON na ciąg znaków za pomocą
"JSON.stringify()". Podobnie przekonwertować z łańcucha z powrotem na
obiekt za pomocą "JSON.parse()".

JSON.stringify()
Konwertuje obiekt JavaScript w ciąg JSON. Ciągi są przydatne do
przesyłania danych od klienta do serwera poprzez przechowywanie lub
przekazywanie informacji. Na przykład mozna zebrać ustawienia
uzytkowanika po stornie klienta, a następnie wysłać je na serwer.

Przyjrzymy się obiektowi JSON, który przypisujemy do zmiennej contacts,
a następnie przekonwertujemy go JSON.stringify(), przekazując contacts
do funkcji. Mozna przepisać ten ciąg do zmiennej s.

let contacts = {
  "name": "Timothy",
  "age": 35,
  "address": {
    "street": "1 Main St",
    "city": "Montreal"
  },
  "interests": ["cooking", "biking"]
}
let s = JSON.stringify(contacts);

Jeśli spojrzymy na "s" konsolę, mozna zobaczyć, ze JSON jest dostępny
jako ciąg, a nie obiekt.

'{"name":"Timothy","age":35,"address":{"street":"1 Main St","city":"Montreal"},
"interests":["cooking","biking"]}'

Ta JSON.stringify() funkcja pozwala nam konwertować obiekty na ciągi.

JSON.parse()
Aby przekonwertować ciąg z powrotem na funkcję, uzywamy wbudowanej
JSON.parse() funkcji do dekodowania ciągu.

let contacts = JSON.parse(s);

Mozna uzyskać dostęp do danych jak zwykły obiekt JavaScript.

contacts.name // Timothy

Zad. 3

.call(), .apply(), .bind()

Te 3 funkcje mają powiązane z nią elementy:
1. Kontekst - czyli to, do czego odnosimmy się za pomocą słowa kluczowego
"this"
2. Argumenty - lisa argumentów przekazanych do funkcji w momencie jej
wywołania.

Metoda call() - ta metoda wywołuje funkcję z danej "this" wartości i argumentów.

Przykład: Wywołanie funkcji w tym samym kontekście

let owen = {
name: "Owen"
}
function sayTo(first, second){
console.log(this);
return first + " " + this.name + " " + second;
}
sayTo.call(owen, "Hi", "how are you?");
//this is now the owen object
//returns "Hi Owen how are you?

Składnia:

functionName.call(value of this, arg1, arg2…)

Wywołanie .call zasadniczo wymusza wartość tego parametru w dowolnej
funkcji .call. W tym przypadku wywołujemy funkcję sayTo. połączenia
.call(Owen, ...) wymusza this od sayTo(), aby być przedmiotem Owen.

"Hi i how are you?" są wprowadzane jako drugi lub trzeci argument
funkcji sayTo(który wymaga 2 argumentów).

Metoda .apply() - korzystanie z .apply() jest bardzo podobne do .call().
Jedyna róznica polega na tym, ze .call() pobiera arg1 i arg2 jeden po
drugim, ale argumenty które chcemy przekazać umieszczamy w tablicy.

let owen = {
name: "Owen"
}
function sayTo(first, second){
console.log(this);
return first + " " + this.name + " " + second;
}
sayTo.call(owen, "Hi", "how are you?");
let owen = {
name: "Owen"
}
function sayTo(first, second){
console.log(this);
return first + " " + this.name + " " + second;
}
sayTo.apply(owen,["Hi", "how are you?"]);

Składnia:

functionName.apply(value of this, [arg1, arg2 …])

Metoda .bind() - w przeciwieństwie do .apply() i .call() zwraca funkcję
zamiast wartości. Ustawia wartość "this" i zmienia funkcję na nową, ale
nie wywołuje funkcji.

let owen = {
name: “Owen”
}
function sayTo(first, second){
return first + “ “ + this.name + “ “ + second;
}
let sayToOwen = sayTo.bind(owen);

Zasadniczo sayToOwen jest funckcją tworzenia jako nową funkcją.

let sayToOwen = function(first, second){
  return first + “ “ + owen.name + “ “ + second;
}

Następnie mozna uruchomić sayToOwen jako normalną funkcję.
Mozna takze powiązać argumenty sayTo():

let owen = {
name: “Owen”
}
function sayTo(first, second){
return first + “ “ + this.name + “ “ + second;
}
let sayHiToOwen = sayTo.bind(owen, "Hi");

Zmienna sayHiToOwen staje się wtedy:

let SayHiToOwen = function (second) {
  return "Hi" + "" + owen.name + "" + second;
}

.call()
Function.call(value of this, arg1, arg2, …)
//Wykona funkcję

.apply()
Function.apply(value of this, [arg1, arg2, ..])
//Wykona funkcję

.bind()
newFunction = Function.bind(value of this, arg1, arg2 …)
//Zwróci nową funkcję.
*/
