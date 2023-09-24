let username = 'Yan';
console.log(username);
// Tuple
let myTuple: [string, number, boolean] = ['Peter', 24, true];
let mixed = ['Peter', 24, true];

mixed = myTuple;
// myTuple = mixed is not allowed, mixed may not have all the elements of myTuple

// Object
let myObj: object;
myObj = [];
console.log(typeof myObj);
// empty array is an object

//interface like class
interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}
let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: ['Van Halen I', 'Van Halen II', 1984],
};
let jp: Guitarist = {
  name: 'Eddie',
  albums: ['Van Halen I', 'Van Halen II', 1984],
};
evh = jp; //because active is optional ?

// if in interface name is optional
const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}`;
};
console.log(greetGuitarist(evh));

//enum
//"unlike most ts features, enums are not a type-level addition to js but something added to the language and runtime itself"

const logMsg = (message: any): void => {
  console.log(message);
};
//void is a type that represents the absence of a value, no return value

//type vs interface
type mathfunction = (a: number, b: number) => number;

interface mathfunction2 {
  (a: number, b: number): number;
}

//rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b);
};

const total2 = (a: number, ...nums: number[]): number => {
  return nums.reduce((a, b) => a + b);
  //return a + nums.reduce((a, b) => a + b);
};
//never type, also while loop infinite return never type
const error = (message: string): never => {
  throw new Error(message);
};
