// Checking if a number is greater than another number:
let num1 = 5;
let num2 = 8;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}.`)
} else {
    console.log(`${num2} is greater than ${num1}.`)
}

// Checking if a string is equal to another string 
let username = "chai";
let anotherUsername = "tea";

if (username == anotherUsername) {
    console.log("Pick another username")
}

// Checking if a variable is a number or not:
let score = 44;

if (typeof score === "number") {
    console.log("Yep, this is a number")
} else {
    console.log("Nope")
};

// Checking if a boolean value is true or false:
let isTeaReady = false;

if (isTeaReady) {
    console.log("yes")
} else {
    console.log("nope")
}

// Check if an array is empty or not :

let items = [];

console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty")
}