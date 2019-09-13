/*
  Stwórz tablicę obiektów. Nazwij ją 'tasks'. Przypisz do niej zadania z pliku 'tasks.json'.
  Napisz funkcję, która wyliczy i wypisze do konsoli statystykę:
    - ile jest zadań skończonych (ze statusem DONE),
    - ile jest zadań w trakcie realizacji (ze statusem IN_PROGRESS)
    - ile jest zadań do zrobienia (ze statusem TO_DO)
*/

const tasks = [
  {
    "id": 0,
    "title": "Zrozumieć zadanie",
    "description": "Przeczytać opis zadania i go zrozumieć",
    "status": "DONE",
    "createdAt": "2016-04-26T09:00:00+0200"
  },
  {
    "id": 1,
    "title": "Dostęp do API",
    "description": "Uzyskać dostęp do API i zrozumieć strukturę danych",
    "status": "IN_PROGRESS",
    "createdAt": "2016-04-26T09:01:00+0200"
  },
  {
    "id": 2,
    "title": "Lista zadań",
    "description": "wyświetlanie listy zadań ze stronicowaniem (max 5ele mentów na stronie) posortowanych od najstarszych",
    "status": "TODO",
    "createdAt": "2016-04-26T09:02:00+0200"
  },
  {
    "id": 3,
    "title": "Usuwanie",
    "description": "usuwanie z listy wielu zadań na raz z dodatkowym okienkiem potwierdzającym",
    "status": "TODO",
    "createdAt": "2016-04-26T09:03:00+0200"
  },
  {
    "id": 4,
    "title": "Edycja",
    "description": "edytowanie szczegółów zadania (tytuł, opis, status [czekające, realizowane, gotowe]) z możliwością zmiany statusów tylko w przód (czekające -> realizowane, realizowane -> gotowe)",
    "status": "TODO",
    "createdAt": "2016-04-26T09:04:00+0200"
  },
  {
    "id": 5,
    "title": "Liczniki",
    "description": "obok listy dodać liczniki zadań w poszczególnych statusach (wszystkich, nie tylko z wyświetlanej strony)",
    "status": "TODO",
    "createdAt": "2016-04-26T09:05:00+0200"
  },
  {
    "id": 6,
    "title": "Kolory statusów",
    "description": "rozróżnianie kolorami zadań w poszczególnych statusach",
    "status": "TODO",
    "createdAt": "2016-04-26T09:06:00+0200"
  },
  {
    "id": 7,
    "title": "Filtrowanie po statusach",
    "description": "ograniczanie widoku tylko do wybranych statusów (jednego bądź wielu)",
    "status": "TODO",
    "createdAt": "2016-04-26T09:07:00+0200"
  },
  {
    "id": 8,
    "title": "Statystyki dzienne",
    "description": "zliczanie ile maksymalnie zadań było w tym samym czasie realizowanych w danym dniu",
    "status": "TODO",
    "createdAt": "2016-04-26T09:08:00+0200"
  },
  {
    "id": 9,
    "title": "Zaniedbane zadania",
    "description": "wyróżnianie zadań, które są realizowane dłużej niż 3 dni bądź czekają na realizację dłużej niż 5 dni (oba parametry niezależnie konfigurowalne i zapisywane w ciasteczku)",
    "status": "TODO",
    "createdAt": "2016-04-26T09:09:00+0200"
  }
];

function statusStatistics() {
  let DONETasks = 0;
  let IN_PROGRESSTasks = 0;
  let TODOTasks = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === 'DONE') {
      DONETasks++;
    }

    if (tasks[i].status === 'IN_PROGRESS') {
      IN_PROGRESSTasks++;
    }

    if (tasks[i].status === 'TODO') {
      TODOTasks++;
    }
  }

  return {
    doneTasks: DONETasks,
    inProgressTasks: IN_PROGRESSTasks,
    todoTasks: TODOTasks
  };
}

function statusStatistics2() {
  let DONETasks = tasks.filter(function (task) {
    return task.status === 'DONE';
  });

  let IN_PROGRESSTasks = tasks.filter(function (task) {
    return task.status === 'IN_PROGRESS';
  });

  let TODOTasks = tasks.filter(function (task) {
    return task.status === 'TODO';
  });

  return {
    doneTasks: DONETasks.length,
    inProgressTasks: IN_PROGRESSTasks.length,
    todoTasks: TODOTasks.length
  };
}

console.log(statusStatistics2());

const people = [
  {
    name: 'Mark',
    age: 30
  },
  {
    name: 'Steve',
    age: 23
  },
  {
    name: 'Carl',
    age: 30
  },

];

function xAges() {
  let age = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i].age === 30) {
      age++;
    }
  }

  return age;
}

console.log(xAges());