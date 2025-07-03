// Number 
let balance = 120;
console.log(typeof(balance)); // number

let anotherBalance = new Number(120);
console.log(typeof anotherBalance); // object
console.log(anotherBalance); // [Number: 120]
console.log(anotherBalance.valueOf()); // 120

// every primitive can be made into non-primitive using new keyword

// boolean 
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined 
let firstname;
console.log(firstname); // undefined
console.log(typeof firstname); // undefined
// console.log(varThatIsNotDefined); // throws error

let anotherFirstnane = null;
console.log(anotherFirstnane); // null
console.log(typeof anotherFirstnane); // object
// so null is an object which holds for EMPTY

// STRINGS
let myStrings = "hello";
let myStringsOne = 'bibek';
let username = "hites";
let oldGreet = myStrings + " " + myStringsOne;
console.log(oldGreet);

let newGreet = `hello, ${myStringsOne}!!!`;
console.log(newGreet); 
// this is callled string interpolation
// similar to python f-strings

let myName = "Bibek";
let myLast = "Chaudhary";
console.log(`I am ${myName} ${myLast}.`)

// these are always unique
let sm1 = Symbol("hitesh");
let sm2 = Symbol("chaudhary");
// this hitesh and chaudhary are just for the name of symbol
// this will always be unique 
// to avoid clash with keywords

console.log(sm1 == sm2); // false



