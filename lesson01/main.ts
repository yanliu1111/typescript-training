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

//Assertion
type One = string;
type Two = string | number;
type Three = 'Hello';

//but cannot use <> in react
let d = <One>'World'; //alliase
let e = <string | number>'World'; //directly

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return 'a' + 'b';
};
//assertion is `as string`
let myVal: string = addOrConcat(1, 2, 'concat') as string;
//dom
const img = document.getElementById('img') as HTMLImageElement;
const myImg = document.getElementById('#img')!; //non-null assertion operator
const nextImg = <HTMLImageElement>document.getElementById('#img'); // cannot use in tsx file for react
img.src = 'https://picsum.photos/200';
myImg.src;

//type guard, check it exists or not
// let year: HTMLElement | null;
// year = document.getElementById('year');
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute('datetime', thisYear);
//   year.textContent = thisYear;
// }
//second way assertion
let year = document.getElementById('year') as HTMLSpanElement;
let thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

//class -> super
class Coder {
  //constructor parameters are public by default
  //different modifiers
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'TS'
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
    return `${this.name} knows ${this.lang}`; // can access the lang value because it is protected in the parent class
  }
}

const peter = new WebDev('Mac', 'Peter', 'Rock', 24);
console.log(peter.getAge());

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
    return `${this.name} is ${action} the ${this.instrument}`;
  }
}
const Page = new Guitarist('Page', 'Guitar');
console.log(Page.play('strums'));

// static, track static in the class, not in the instance
class Peeps {
  static count: number = 0;
  static getCount() {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; //counts increment first, 1 instead of 0
  }
}
//getcount can be called on the class as well as the instance
// getter and setter
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState; //if only get, it is read only, beacuse no setter
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((elements) => typeof elements === 'string')
    ) {
      this.dataState = value;
      return;
    } else throw new Error('Param is not an array of string');
  }
}

const myBands = new Bands();
myBands.data = ['The Beatles', 'The Rolling Stones', 'The Who']; //setter
console.log(myBands.data); //getter
myBands.data = [...myBands.data, 'The Doors'];
console.log(myBands.data);

//lesson 7 index signature and keyof assertions
//assess the index dynamically with loop use
// interface TransactionObj {
//   readonly [key: string]: number;
// }

interface TransactionObj {
  readonly [key: string]: number; //index signature
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: 25,
  Books: 45,
  Job: -25,
};

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let net = 0;
  for (let transaction in transactions) {
    net += transactions[transaction];
  }
  return net;
};

console.log(todaysNet(todaysTransactions));
//keyof is for create union type and the union type is the specific string literal
//two types
interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Bob',
  GPA: 3.5,
  classes: [100, 200],
};
//three types
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');

//lesson 8 generics, ts does allow generics sometimes we simply don't know what types will passed into a function interface class type Alias, all of the above and generics allow us to provide a placceholder a type of variable.
const stringEcho = (arg: string): string => arg;
const echo = <T>(arg: T): T => arg;
const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && arg !== null && !Array.isArray(arg);
};
// some logic some thinking about what needs to return
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg }; //!!arg is to convert to boolean same as Boolean(arg)
};

interface HasID {
  id: number;
}

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};
const usersArray = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

console.log(getUsersProperty(usersArray, 'email'));
console.log(getUsersProperty(usersArray, 'username'));
