/*
  Zadanie 5. Napisz funkcję, która przyjmie dwie liczby całkowite: `begin` i `end`
  i wypisze wszystkie liczby od `begin` do `end`.
  Jeżeli użytkownik poda większą liczbę `end` niż `begin`, poinformuj go żeby podał odwrotnie
*/

function takeNumber (begin, end) {
  if (begin < end) {
    console.log(begin, end);
  } else {
    if (begin > end) {
      console.log("You gave it wrong");
    }
  }
}
/*Stworzyłam funkcję o nazwie "takeNumber", która przyjmuje dwa parametry
(begin, end) i zostanie przekazany do tej funkcji. Na pierwszej linii instrukcja
if (begin < end) oznacza to, ze przetestuje wartość liczby. Będzie sprawdzał,
czy jego liczba begin będzie mniejsza niz end wypisze wszystkie liczby.
Druga linia else określa, co zrobić, jeśli uzytkownik poda większą liczbę
end niz begin pojawi się komunikat z prośbą o podanie liczby odwrotnie.*/
