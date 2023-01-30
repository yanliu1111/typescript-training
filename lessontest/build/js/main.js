"use strict";
let a = "Hello";
let b = a; //less specific
let c = a; //more specific
//not allowed in TXS in react
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//Be careful with asserions
let nextVal = addOrConcat(2, 2, "concat");
10;
10;
//DOM
