/*
  Stwórz tablicę obiektów. Nazwij ją 'tasks'. Przypisz do niej zadania z pliku 'tasks.json'.
  1) Napisz funkcję, która dla tablicy 'tasks' wypisze wszystkie tytuły tasków i roki w których zostały stworzone.

  Wywołanie funkcji ma wypisywać do konsoli:

  Zrozumieć zadanie - 2018
  Dostęp do API - 2017
  Lista zadań 2016
  ...

  2) Napisz funkcję, która przyjmie jako parametr task i zwróci sformatowaną datę w postaci
  DZIEŃ/MIESIĄC/ROK

  np.
  Przekazujemy do funkcji task:
  {
    "id": 0,
    "title": "Zrozumieć zadanie",
    "description": "Przeczytać opis zadania i go zrozumieć",
    "status": "DONE",
    "createdAt": "2018-04-26T09:00:00+0200"
  }
  A funkcja ma zwrócić:
  '26/04/2018'

*/

const tasks = [
  {
    "id": 0,
    "title": "Zrozumieć zadanie",
    "description": "Przeczytać opis zadania i go zrozumieć",
    "status": "DONE",
    "createdAt": "2018-04-26T09:00:00+0200"
  },
  {
    "id": 1,
    "title": "Dostęp do API",
    "description": "Uzyskać dostęp do API i zrozumieć strukturę danych",
    "status": "IN_PROGRESS",
    "createdAt": "2017-01-26T09:01:00+0200"
  },
  {
    "id": 2,
    "title": "Lista zadań",
    "description": "wyświetlanie listy zadań ze stronicowaniem (max 5ele mentów na stronie) posortowanych od najstarszych",
    "status": "TODO",
    "createdAt": "2016-12-26T09:02:00+0200"
  },
  {
    "id": 3,
    "title": "Usuwanie",
    "description": "usuwanie z listy wielu zadań na raz z dodatkowym okienkiem potwierdzającym",
    "status": "TODO",
    "createdAt": "2017-02-26T09:03:00+0200"
  },
  {
    "id": 4,
    "title": "Edycja",
    "description": "edytowanie szczegółów zadania (tytuł, opis, status [czekające, realizowane, gotowe]) z możliwością zmiany statusów tylko w przód (czekające -> realizowane, realizowane -> gotowe)",
    "status": "TODO",
    "createdAt": "2018-10-30T09:04:00+0200"
  },
  {
    "id": 5,
    "title": "Liczniki",
    "description": "obok listy dodać liczniki zadań w poszczególnych statusach (wszystkich, nie tylko z wyświetlanej strony)",
    "status": "TODO",
    "createdAt": "2016-11-23T09:05:00+0200"
  },
  {
    "id": 6,
    "title": "Kolory statusów",
    "description": "rozróżnianie kolorami zadań w poszczególnych statusach",
    "status": "TODO",
    "createdAt": "2018-02-01T09:06:00+0200"
  },
  {
    "id": 7,
    "title": "Filtrowanie po statusach",
    "description": "ograniczanie widoku tylko do wybranych statusów (jednego bądź wielu)",
    "status": "TODO",
    "createdAt": "2017-12-21T09:07:00+0200"
  },
  {
    "id": 8,
    "title": "Statystyki dzienne",
    "description": "zliczanie ile maksymalnie zadań było w tym samym czasie realizowanych w danym dniu",
    "status": "TODO",
    "createdAt": "2016-05-20T09:08:00+0200"
  },
  {
    "id": 9,
    "title": "Zaniedbane zadania",
    "description": "wyróżnianie zadań, które są realizowane dłużej niż 3 dni bądź czekają na realizację dłużej niż 5 dni (oba parametry niezależnie konfigurowalne i zapisywane w ciasteczku)",
    "status": "TODO",
    "createdAt": "2018-01-25T09:09:00+0200"
  }
];

function writeAllTitlesAndYears() {
  for (let i = 0; i < tasks.length; i++){
    console.log(`${tasks[i].title + " - " + tasks[i].createdAt.substring(0, 4)}`);
  }
}
writeAllTitlesAndYears();

function formatDate(task) {
  const day = task.createdAt.substring(0, 4);
  const month = task.createdAt.substring(5, 7);
  const year = task.createdAt.substring(8, 10);

  return year + '/' + month + '/' + day;
}
