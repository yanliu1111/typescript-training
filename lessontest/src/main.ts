/* lesson 1
let username = "Greg";
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
*/
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

//lowercase? Type 'Guitarist' has capital letter 'G'
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
