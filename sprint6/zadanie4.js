/*
Zadanie 4. Napisz funkcję, która przyjmie liczbę całkowitą i wypisze wszystkie liczby
od tej liczby całkowitej do 100. Jeżeli użytkownik poda liczbę większą niż 100, poinformuj
go żeby wpisał mniejszą liczbę niż 100
*/

function writeNumber(n) {
  if (n < 100) {
    for (let i = n; i <= 100; i++){
      console.log(i);
    }
  } else {
      console.log('You entered the numbers incorrectly. The number should by smaller than 100.');
    }
  }

/*
Stworzyłam funkcję o nazwie "writeNumber", który przyjmuje
jeden parametr "n". W funkcji pierwsza instrukcja warunkowa if
sprawdza, czy wartość podanej liczby będzie mniejszy bądz równy od 100,
funkcja wywołuje przy podaniu róznych liczb do 100.
W przeciwnym razie, kiedy warunek jest fałszywy, zostanie
wykonana po instrukcji else, wyświetla informację.
('You entered the numbers incorrectly. The number should by smaller
than 100.').
*/
