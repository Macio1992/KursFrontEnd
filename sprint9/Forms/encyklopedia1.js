/*
  Co to jest hoisting?
  Opisz jakie zalety mają preprocesory CSS opierając się na SASS.
*/

/*
  Zad 1.

  Hoisting polega na wynoszeniu deklaracji zmiennych i funkcji "na górę" kodu,
  czyli na początek funkcji, do globalnego zasięgu lub zasięgu funkcji. Oznacza to,
  ze mozna odwołać się do zmiennej lub funkcji zanim jeszcze zostanie zadeklarowana.

  WYNOSZENIE ZMIENNYCH
  ES5 -  var

  Deklaracja to zdefiniowanie zmiennej, a inicjalizacja to przypisanie jej wartości.

  function example() {
  var foo; // deklaracja zmiennej
  foo = 5; // inicjalizacja zmiennej
  var boo = 10; // deklaracja i inicjalizacja
  }

  Wynoszona jest tylko deklaracja zmiennej. Jeśli odwołamy się do zmiennej przed jej
  zdefiniowaniem, w odpowiedzi otrzymamy 'undefined':

  function example() {
    console.log(foo); // undefined
    var foo = 5;
    console.log(foo); //5
  }
  Zmienna jest zadeklarowana, ale nie jest zdefiniowana jej wartość. Wartość
  odczytać mozna dopiero po inicjalizacji zmiennej, czyli ponizej var a = 10;

  ES6 - let i const

  W przypadku uzycia let i const nie są wynoszone na górę zakresu funkcji, ani
  do środowiska globalnego. Pomiędzy deklaracją zmiennej a początkiem jej zakresu
  nazywa się Temporal Dead Zone (TDZ). Oznacza to, ze jeśli odwołamy się do zmiennej
  przed jej zadeklarowaniem, otrzymamy error:ReferenceError:Cannot access 'a' before intialization.

  function example() {
  // Temporal Dead Zone
  console.log(foo);    // ReferenceError: Cannot access 'foo' before initialization

  let foo = 10;
  console.log(foo);    // 10
}
  Zmienną mozna odczytać dopiero po jej zadeklarowaniu.

  WYNOSZENIE FUNKCJI
  Function declaration

  Hoisting dotyczy równiez funkcji, zapisanej przy uzyciu deklaracji funkcji. Tak jak przy zmiennych,
  oznacza to, ze mozemy odwołać się do funkcji zanim zostanie ona zadeklarowana:

  foo();

function foo() {
  console.log('It works!'); // It works!
}

  Function expression
  W przypadku wyrazeń funkcji zasady dotyczące hoistinu są podobne jak w przypadku zmiennych,
  jeśli przypiszemy funkcję do zmiennej var, deklaracja funkcji zostanie wyniesiona na górę
  zakresu zmiennej, poniewaz wynoszona jest tylko deklaracja, i tak nie uzyjemy funkcji
  przed zadeklarowaniem:

  foo();  // TypeError: foo is not a function

var foo = function() {
  console.log('It works!');
}

  Natomiast w przypadku let i const tworzy się martwa strefa (TDZ) i chcąc odwołać się do funkcji
  przed inicjalizacją otrzymujemy error:

foo();  // ReferenceError: Cannot access 'foo' before initialization

let foo = function() {
  console.log('It works!');
}

  Hoisting nie dotyczy przypisania wartości (inicjalizacji):
  // przypisanie wartości typu prostego
  a = "coś"

  // wyrazenie funkcyjne
  b= function() {kod funkcji}


  Zad 2.

  Cascading Style Sheets są informacją dla przeglądarki, jak powinna wyglądać strona.
  Przeglądarki oczekują informacji o wyglądzie strony zapisanej w CSS.

  Sass to preprocessor CSS, który pozwala na szybszą i wydajnieszą pracę z arkuszami stylów.
  Sass jest rozszerzeniem dla CSSa, które dodaje mu mocy i elegancji.
  Umozliwia pisanie kodu z dwóch składniach klamrową (SCSS) oraz skróconą (SASS).
  1. Składnia Sass zamiast nawiasów klamrowych do definiowania bloków wykorzystuje wcięcia,
  natomiast oddziela średniki od siebie znak nowej linii.
  2. Sładnia Scss wraca swoimi załozeniami do klasycznego formatowania kodu CSS.
  Do definiowania bloków wykorzystujemy nawiasy klamrowe, z kolei średniki oddzielają od siebie.

  Przykład

  SASS
  .box
    +border-redius(10px)

  SCSS
  .box {
    border-radius: 10px;
  }

  Głównym zadaniem Sassa jest wyaliminowanie wad CSSa. Z jednej strony jest on łatwy do przyswojenia,
  z drugiej zdarza się, ze nasza baza kodu CSSa staje się niepotrzebnie skomplikowana i rozbudowana
  przy większych projektach.

  W tym miejscu pojawia się Sass, by poprawić składnię CSSa. Zapewnia on szereg dodatkowych cech i
  uzytecznych narzędzi. Sass pomaga tam, gdzie CSS zawodzi.

  Preprocesory CSS zalety:
  1. mozliwość ustawiania zmiennych i parametrów, dzięki czemu zachowuje się spójność w stylach,
  np. mozna zdwfiniować główny kolor lub obramowanie współdzielone w całej aplikacji.
  2. zmniejszenie kodu CSS przez eliminację powtórzeń tych samych bloków kodu.
  3. zagniezdzanie reguł, dzięki czemu łatwiej zarządzać selektorami.
  4. Łatwość zarządzania kodem CSS i przenoszenia go między aplikacjami z jednoczesnym wyborem,
  które moduły css będą potrzebne.
  5. mozliwość wykorzystywania matematyki i funkcji logicznych.
*/
