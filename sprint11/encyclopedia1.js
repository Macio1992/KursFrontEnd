/*
  Co to jest callback?
*/

/*
  Callback to funkcja, która ma zostać wykonana po zakończeniu
  wykonywania innej funkcji stąd nazwa "oddzwonienie".

  Funkcja, która przyjmuje inną funkcję
  jako argument i zwracane przez inną funkcę, nazywa się
  funkcją wyzszego rzędu.
  Kazda funkcja przekazana jako parametr do innej funkcji
  nayzwa się funkcją wywołania zwrotnego.
  A funkcja zwrotna jest uruchamiana wewnątrz funkcji, do której
  została przekazana.

  Funkcje mają typ obiektów. Tak jak wszystkie inne obiekty (ciąg,
  tablice itp). Mogą być przekazane jako argument do dowolnej innej
  funkcji podczas wywoływania.

  WYWOŁANIE ZWROTNE

  function add(a, b, callback) {
    document.write(`The sum of ${a} and ${b} is ${a+b}.`);
    callback();
  }

  function disp() {
    document.write('This must be printed after addition');
  }

  add(5, 6, disp);

  // The sum of 5 and 6 is 11.
  // This must be printed after addition

  Mamy dwie funkcje add(a, b, callback) i disp(). Add() jest
  wywoływany z funkcją disp(), przekazywany jako trzeci argument
  do funkcji add wraz z dwoma liczbami.
  W wyniku tego funkcja add() jest wywoływana za pomocą 1,2 i disp(),
  który jest wywołaniem zwrotnym. Funkcja add() wypisuje dodanie
  dwóch liczb, a gdy tylko to się stanie, funkcja wywołania zwrotnego
  zostanie uruchomiona. W związku z tym widzimy wszystko, co znajduje
  się w disp() jako wynik ponizej wyniku dodawania.

  PRZEKAZANIE ANONIMOWYCH FUNKCJI

  function add(a, b , callback){
  document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>");
  callback();
  }

  add(5,6,function disp(){
  ocument.write('This must be printed after addition.');
  });

// The sum of 5 and 6 is 11.
// This must be printed after addition.

Połączenia zwrotne są uzywane podczas operacji asynchronicznych,
takich jak wysyłanie ządania API do Map Google, pobieranie,
zapisywanie niektórych danych z/do pliku, rejestrowanie detektorów
zdarzeń i powiązanych rzeczy. Wysztkie wymienione operacje uzywają
wywołań zwrotnych.
*/
