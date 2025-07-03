// Objects -> new or simply {}

let onj = {};
// console.log(onj); // {}
// console.log(typeof onj); // object

let username = {
    firstname: "bibek", 
    isLoggedin: true,
    pasword: "@#"
};
// console.log(username);

// behavious of const object
const personInfo = {
    firstname: "rajan",
    isLoggedin: false,
    pasword: "#$$%%"
};
personInfo.firstname = "new Name";
console.log(personInfo);

// new keyword added in const object
personInfo.lastname = "chaudhary";
console.log(personInfo);

// alternative way, but better than . operator 
console.log(personInfo["firstname"]);


// date 
let today = new Date();
console.log(today);

// array 
// array have its own adv (loop through index) and disadv (now keyword but index is used)
let heros = ["a", "b", "c", true, 12];
console.log(heros[0]);
console.log(heros[2]);

// implicite type conversion 
console.log("1" + 1); // 11
console.log(true + 1); // 2
console.log("1" + 234556); // 1234556
// implicite conversion is waste 

// explicit conversion 
let isValue = "2";
// console.log(Number(isValue)); // 2
// console.log(typeof Number(isValue)); // number

let someOther = "2abc";
// console.log(Number(someOther)); // NaN
// console.log(typeof Number(someOther)); // number
// NaN is a number 

let nth = null;
// console.log(Number(nth)); // 0
// console.log(typeof Number(nth)); // number

let undef = undefined;
// console.log(Number(undef)); // NaN
// console.log(typeof Number(undef)); // number

