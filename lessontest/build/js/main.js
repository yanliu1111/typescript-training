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
const myImg = document.getElementById("img") as HTMLImageElement;
//not-null assertion operator
const img = document.querySelector("img")!;
img.src;
const nextImg = <HTMLImageElement>document.getElementById("img");

Lesson 6

class Coder {
  //constructor parameters are public by default
  //different modifiers
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TS"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `${this.name} is ${this.age} years old`; // accesses the age value inside of the class
  }
}
//create instance of class
const Bob = new Coder("Bob", "rock", 30);
console.log(Bob.getAge()); // inside of the class, can access private
// console.log(Bob.age); //private, cannot access
// console.log(Bob.lang); //protected, cannot access

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang} code`;
  }
}
//super is used to access the parent class
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);

//interface in class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}
class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} plays ${this.instrument} by ${action}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strumming"));

//static methods
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count; //access static property
  }

  public id: number;

  constructor(public name: string) {
    this.id = ++Peeps.count; // first Peeps is 1, if Peeps.count++, first Peeps is 0
  }
}

const Boo = new Peeps("Boo");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState; //read only, beacuse no setter
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of string");
  }
}

const myBands = new Bands();
myBands.data = ["The Beatles", "The Rolling Stones", "The Who"];
console.log(myBands.data);
myBands.data = [...myBands.data, "The Doors"];
console.log(myBands.data);

Lesson 7 Index Signatures & keyof Assertions
interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
}
interface TransactionObj {
  readonly [key: string]: number;
}
// all keys are strings, all values are numbers
//readonly makes the object immutable

const todayTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};
// console.log(todayTransactions.Pizza);

let prop: string = "Pizza";
// console.log(todayTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
// console.log(todaysNet(todayTransactions)); // 35

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
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

const logStudentKeys = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} is ${student[key]}`);
};
logStudentKeys(student, "GPA");
//void means the function does not return anything

// interface Incomes {
//   [key: string]: number;
// }
//Union types for streams
type Streams = "salary" | "bonus" | "sidehustle"; //type alias is a union of strings, string literal type is a union of strings
type Incomes = Record<Streams, number | string>;
const monthlyIncomes: Incomes = {
  salary: 1000,
  bonus: 500,
  sidehustle: "100",
};
//for in loop
for (const key in monthlyIncomes) {
  console.log(key, monthlyIncomes[key as keyof Incomes]);
}
*/
//lesson 8 Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// console.log(isObj(true)); //false, is boolean type
// console.log(isObj("Bob")); //false, is string
// console.log(isObj([1, 2, 3])); //false, is array
// console.log(isObj({ name: "Bob" })); //true, is object type
// console.log(isObj(null)); //false, is null
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
//return is: !!arg, which is a double bang operator, which converts any value to a Boolean
//this would take a zero essentially and then flip it and then flip it back and make it true or false instead of say a 0 or 1, so you just flipping it around twice and it takes anything else and it essentially returns a Boolean that way instead of the other data that it might have
// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue("Dave")); // string is true
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({})); // modified
// console.log(isTrue({ name: "Bob", age: 30 }));
// console.log(isTrue([])); // modified
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));
let x = "hello";
let y = 0;
let truthyX = !!x;
let truthyY = !!y;
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
// const usersArray = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
// ];
// console.log(getUsersProperty(usersArray, "website"));
// console.log(getUsersProperty(usersArray, "username"));
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
];
console.log(getUsersProperty(usersArray, "email"));
// ['Sincere@april.biz', 'Shanna@melissa.tv']
class StateObject {
    constructor(value) {
        this.data = value;
    }
    //put getter and setter for state here
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Bob");
console.log(store.state);
store.state = "Dave";
const myState = new StateObject([15, "Bob"]);
myState.state = [1, "Dave", false];
console.log(myState.state);
