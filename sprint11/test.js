/*
  To zadanie powinno pomóc w zadaniu sortującym.
  Stwórz funkcję, która przyjmie jako parametr tablicę liczb całkowitych i zwróci najmniejszą liczbę z tej tablicy.

  Np. Mamy tablicę [5,8,-23,-3,-4,14]
  Funkcja powinna zwrócić : -23

  Np. Mamy tablicę [1,2,90]
  Funkcja powinna zwrócić : 1
*/

function minArray(arr) {
  let min = arr[0];                             //pierwszą liczbę przypisujemy do zmiennej min, szukanie elem.min

  for (let i = 0; i < arr.length; i++) {       //przeszukanie całej tablicy
    if (min > arr[i]) {                        //zaczynamy od pierwszego elem., porównujemy z inną wartością
      min = arr[i];
    }
  }
  return min;
}
