let tasks = [
  {
    title: "Do shopping",
    description: "Go to the shop and buy some milk",
    status: "TODO",
    createdDate: "15-10-2019"
  },
  {
    title: "Do laundry",
    description: "Go laundry place",
    status: "DONE",
    createdDate: "13-10-2019"
  },
  {
    title: "Do laundry",
    description: "Go laundry place",
    status: "DONE",
    createdDate: "13-10-2019"
  },
  {
    title: "Do laundry",
    description: "Go laundry place",
    status: "DONE",
    createdDate: "13-10-2019"
  }
];

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].status === 'DONE') {
    console.log(tasks[i].title + ', ' + tasks[i].status);
  }
}
