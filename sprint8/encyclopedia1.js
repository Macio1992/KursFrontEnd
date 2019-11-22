/*
  Local Storage
  Session Storage

  Jaka jest różnica pomiędzy local storage a session storage?
*/

/*
  Local Storage (pamięć lokalna) to rodzaj pamięci internetowej, który umozliwia stronom  i aplikacjom przechowywanie danych. Oznacza to, ze przechowuje obiekt danych bez datych wazności. Dane nie będą usuwane po zamknięciu przeglądarki i będzie dostępna następnego dnia, tygodnia lub roku.
  Aby uzyć localStorage w aplikacjach internetowych, istnieje 5 metod do wyboru:
  1. setItem(): Dodaj klucz i wartość do localStorage
  2. getItem(): Pobiera wartość klucza z localStorage
  3. removeItem(): Usuń element klucza z localStorage
  4. clear(): Wyczyść wszystkie localStorage
  5. key(): Przeszedł numer, aby pobrać n-ty klucz localStorage

  Session Storage (pamięć sesji) obiekt przechowuje dane tylko dla jednej sesji. Dane zostaną usunięte po zamknięciu przeglądarki, dopóki uzytkownik nie zamyka to okno lub kartę.

  Róznica polega na tym, ze podczas gdy dane w localStorage nie wygasają, dane w sessionStorage są usuwane po zakończeniu sesji strony.
*/