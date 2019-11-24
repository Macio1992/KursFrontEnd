/*
  Local Storage
  Session Storage

  Jaka jest różnica pomiędzy local storage a session storage?
*/

/*
  LocalStorage mozna nazwać jako "magazyn danych" w przeglądarce
  z którego mozemy korzystać w naszych aplikacjach webowych.

  LocalStorage jest to, ze dane te zapisujemy w pamięci przeglądarki
  osoby odwiedzającej naszą stronę. Dane są zachowywane w przeglądarce
  po jej zamknięciu, nasza aplikacja ma dostęp do zapisanych wcześniej
  informacji wtedy, gdy uzytkownik zdecyduje się zwrócić na naszą stronę
  po kilku dniach.

  LocalStorage ma dostęp poprzez "Web Storage API" przeglądarki, która umozliwa
  5 głównych metod:
  1. setItem(): ta metoda pozwala nam na zapisywanie danych w LocalStoragr.
  Przyjmuje ona dwa parametry - klucz i wartość.

  window.localStorage.setItem('name','Adam Front')

  2. getItem(key): tej metodzie mozemy odczytać przez nas wcześniej dane.
  W tym przypadku podajemy tylko jeden argument - klucz, dzięki któremu
  mozemy odczytać przypisaną do niego wartość.

  window.localStorage.getItem('user')

  3. removeltem(key): ta metoda mówi, gdy zdecydujemy się na usunięcie
  z LocalStorage dowolnej pozycji, mozna zrobić to uzywając metody
  removeltem(), przekazując jako argument klucz pozycji do usunięcia.
  Gdy argument podamy nieistniejacą wartość klucz, metoda ta nic nie zrobi
  (nie pojawi nam komunikat błędu).

  4. clear(): wywołanie tej metody usunie nam wszystkie istniejące
  elementy z LocalStorage.

  5. key(index): ta metoda jest przydatna w przypadku gdy musimy iterować
  po kluczach i pozwala nam podać jako argument numer bądz index elementu
  LocalStorage w celu wyciągnięcia jego nazwy:

  const KeyName = window.localStorage.key(index)

  Web Storage API umozliwia nam równiez skorzystanie z SessionStorage,
  który zachowuje się dokładnie tak samo jak LocalStorage, z tą róznicą,
  ze dane przechowywane w SessionStorage zostają usunięte kazdorazowo po
  zamknięciu okna/karty przeglądarki.
*/
