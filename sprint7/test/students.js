/*  CRUD
  C - create
  R - read
  U - update
  D - delete

  Student:
  id,
  name,
  lastName,
  index
*/

// 'Klasa' Student
function Student({ id, name, lastName, index }) {

  if (index === undefined) {
    index = 0;
  }

  this.id = id;
  this.name = name;
  this.lastName = lastName;
  this.index = index;
}

const students = [
  new Student({
    id: 11,
    name: 'student1',
    lastName: 'studentlastname1',
    index: 100
  }),
  new Student({
    id: 12,
    name: 'student2',
    lastName: 'studentlastname2',
    index: 100
  }),
  new Student({
    id: 13,
    name: 'student3',
    lastName: 'studentlastname3',
    index: 300
  }),
];

/** Adding new student */
function addNewStudent(student) {
  students.push(student);
}

/** Removing a student */
function removeStudent(id) {
  let findStudentIndex;
  for (let i = 0; i < students.length; i++) {
    if (id === students[i].id) {
      findStudentIndex = i;
    }
  }

  students.splice(findStudentIndex, 1);
}

/** Updating whole student */
function updateStudent(id, newStudent) {
  let findStudentIndex;
  for (let i = 0; i < students.length; i++) {
    if (id === students[i].id) {
      findStudentIndex = i;
    }
  }

  students[findStudentIndex] = newStudent;
}

/** Updating student's name */
function updateStudentName(id, newName) {
  let findStudentIndex;
  for (let i = 0; i < students.length; i++) {
    if (id === students[i].id) {
      findStudentIndex = i;
    }
  }

  students[findStudentIndex].name = newName;
}

/** Select a student */
function selectStudent(id) {
  let findStudentIndex;
  for (let i = 0; i < students.length; i++) {
    if (id === students[i].id) {
      findStudentIndex = i;
    }
  }

  return students[findStudentIndex];
}

/** Select all students */
function selectAllStudents() {
  return students;
}

/* HTML/CSS Interface */
const studentsUl = document.getElementById('students');

for (let i = 0; i < students.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = students[i].name;
  studentsUl.appendChild(li);
}
