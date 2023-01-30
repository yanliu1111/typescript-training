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


//Type aliases
type stringOrNum = string | number;

type stringOrNumberArray = (string | number)[];

//use type alias in other type alias
type Guitarist = {
  name?: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNum;
//literal types
let myName: "Yan";
let userName: "Yan" | "Bob" | "Dave";
userName = "Yan";

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

//void???
const logMessage = (message: any): void => {
  console.log(message);
  //   return 54;
};
//void is the same as not returning anything
// console.log("hello");
// console.log(add(1, 2));

const subtract = (a: number, b: number): number => a - b;
type mathFunc = (a: number, b: number) => number;
// interface mathFunc {
//   (a: number, b: number): number;
// }

let multiply: mathFunc = (a: number, b: number): number => a * b;

//optional parameters
const addAll = (a: number, b: number, c?: number | string): number => {
  if (typeof c === "string") {
    c = parseInt(c);
    return a + b + c;
  }
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
};
console.log(addAll(1, 2, "3"));

const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr);
};

//default parameters
const sumAll2 = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};
console.log(sumAll2(undefined, 2));

// Rest parameters
const total = (a: number, ...numbers: number[]): number => {
  return a + numbers.reduce((acc, curr) => acc + curr);
};
console.log(total(1, 2, 3));

const createError = (message: string, code?: number): never => {
  throw { message, code };
};

//custom types guard

const isString = (value: any): value is string => {
  return typeof value === "string" ? true : false;
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (isString(value)) {
    return "string";
  }
  if (isNumber(value)) {
    return "number";
  }
    return "unknown";
};
lesson 5 asserions
*/
type One = string;
type Two = string | number;
type Three = "Hello";

let a: One = "Hello";
let b = a as Two; //less specific
let c = a as Three; //more specific
//not allowed in TXS in react
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
//Be careful with asserions
let nextVal: number = addOrConcat(2, 2, "concat") as number;

10 as string;
10 as unknown as string;

//DOM
