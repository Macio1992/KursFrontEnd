/*
  Zadanie 4. Napisz funkcję, która przyjmie liczbę całkowitą i wypisze wszystkie liczby
  od tej liczby całkowitej do 100. Jeżeli użytkownik poda liczbę większą niż 100, poinformuj
  go żeby wpisał mniejszą liczbę niż 100
*/

function writeNumber(n) {
  if (n <= 100) {
    for (let i = 60; i <= n; i++){
      console.log(i);
    }
    } else {
      console.log('You entered the numbers incorrectly. The number should by smaller than 100.');
    }
  }

/*Stworzyłam funkcję o nazwie "writeNumber", który przyjmuje
jeden parametr "n". Pierwsza instrukcja warunkowa
sprawdza, czy wartość n jest mniejszy bądz równy od 100, będzie to
oznaczało, ze  wypisze od liczby  całkowitej do 100.
Jezeli drugi warunek nie zostanie spełniony, zostanie
wykonana i wyświetli komunikat.*/
