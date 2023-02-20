"use strict";
// all keys are strings, all values are numbers
//readonly makes the object immutable
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// console.log(todayTransactions.Pizza);
let prop = "Pizza";
// console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "Bob",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test); //undefined
// console.log(student.classes[1]);
for (const key in student) {
    // console.log(key, student[key as keyof Student]);
}
//using an assertion: keyof Student is a union of all the keys in the Student interface
//this makes an array of all the keys in the Student interface
// Object.keys(student).forEach((key) => {
//   console.log(key, student[key as keyof Student]);
// }
Object.keys(student).map((key) => {
    // console.log(student[key as keyof Student]);
    // console.log(student[key as keyof typeof student]);
});
//typeof student is the type of the student object, retreiving the values of the object
//different ways between forEach and map to access the values in the object becuase map returns a new array and forEach does not, so you can't use map to access the values in the object
const logStudentKeys = (student, key) => {
    console.log(`Student ${key} is ${student[key]}`);
};
logStudentKeys(student, "GPA");
const monthlyIncomes = {
    salary: 1000,
    bonus: 500,
    sidehustle: "100",
};
//for in loop
for (const key in monthlyIncomes) {
    console.log(key, monthlyIncomes[key]);
}
