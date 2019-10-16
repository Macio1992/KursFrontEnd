// let student = {
//   name: "John",
//   lastName: "Gleske"
// };

// console.log(student.name + ": " + student.lastName);

// for (let i = 0; i < students.length; i++) {
//   if (students[i].age > 20) {
//     console.log(students[i].name + ": " + students[i].lastName);
//   }
// }

function sumAges(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].age;
  }

  // if (arr.length === 0) {
  //   return 0;
  // } else {
  //   return sum / arr.length;
  // }

  return (arr.length === 0) ? 0 : (sum / arr.length);
}

console.log('moja suma : ' + sumAges([]));
