"use strict";
/* lesson 1
let username = "Bob";
console.log(username);

let a = 12;
let b = "6";
let c = 2;

console.log(a / b);
console.log(c * b);

lesson 2
let myName: string = "Yan";
let meaningOfLife: number = 30;
let isHungry: boolean = true;
let album: any;

const sum = (a: number, b: number): number => {
  return a + b;
};

let postId: string | number;
let isActive: boolean | number | string;

let re: RegExp = /\w+/g;

lesson 3

let stringArr = ["one", "hey", "Dave"];
let guitar = ["strat", "Les Paul", 5150];
let mixData = ["EVH", 1984, true];
mixData = guitar;
let test = [];
let bands: string[] = [];
bands.push("Van Halen");

let myTuple: [string, number, boolean] = ["bob", 30, true];

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
  prop1: "hello",
  prop2: 30,
};

exampleObj.prop1 = "world";

interface Guitarist {
  name?: string;
  active?: boolean;
  albums: (number | string)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812", "For Unlawful Carnal Knowledge"],
};

//lowercase??? Type 'Guitarist' has capital letter 'G'
let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

// evh = jp;
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name === undefined) {
    return "Hello, anonymous";
  } else {
    console.log(`Hello ${guitarist.name.toUpperCase()}`);
  }
};

console.log(greetGuitarist(evh));

//Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U);

lesson 4 functions
*/
//literal types
let myName;
let userName;
userName = "Yan";
//functions
const add = (a, b) => {
    return a + b;
};
//void???
const logMessage = (message) => {
    console.log(message);
    //   return 54;
};
//void is the same as not returning anything
// console.log("hello");
// console.log(add(1, 2));
const subtract = (a, b) => a - b;
// interface mathFunc {
//   (a: number, b: number): number;
// }
let multiply = (a, b) => a * b;
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c === "string") {
        c = parseInt(c);
        return a + b + c;
    }
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
console.log(addAll(1, 2, "3"));
const sumAll = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr);
};
//default parameters
const sumAll2 = (a = 10, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll2(undefined, 2));
// Rest parameters
const total = (a, ...numbers) => {
    return a + numbers.reduce((acc, curr) => acc + curr);
};
console.log(total(1, 2, 3));
const createError = (message, code) => {
    throw { message, code };
};
//custom types guard
const isString = (value) => {
    return typeof value === "string" ? true : false;
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (isString(value)) {
        return "string";
    }
    if (isNumber(value)) {
        return "number";
    }
    return "unknown";
};
