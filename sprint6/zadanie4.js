/*
Zadanie 4. Napisz funkcję, która przyjmie liczbę całkowitą i wypisze wszystkie liczby
od tej liczby całkowitej do 100. Jeżeli użytkownik poda liczbę większą niż 100, poinformuj
go żeby wpisał mniejszą liczbę niż 100
*/

function writeNumber(n) {
  let i = 0;
  if (n < 100) {
    for (let i = 1; i <= 100; i++){
      console.log(i);
    }
  } else {
      console.log('You entered the numbers incorrectly. The number should by smaller than 100.');
    }
  }

/*
Stworzyłam funkcję o nazwie "writeNumber", który przyjmuje
jeden parametr "n". Pierwsza instrukcja warunkowa
sprawdza, czy wartość podanej liczby będzie mniejszy bądz równy od 100,
kod wypisze liczby całkowite do 70 (np. od 60 do 70).
Jezeli drugi warunek nie zostanie spełniony, zostanie
wykonana po instrukcji i wyświetli komunikat
('You entered the numbers incorrectly. The number should by smaller
than 100.').
*/
