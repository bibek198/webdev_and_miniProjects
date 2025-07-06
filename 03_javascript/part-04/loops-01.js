// WAP 1 : while loop
// find sum of first n natural numbers
let n = 5;
let sum = 0;

let i = 1;
while (i <= n) {
    sum += i;
    i++;
}
// console.log(`Sum of ${n} natural numbers is ${sum}.`);

// WAP 2 : while loop
// WAP which counts from n to 1 and also stores the value in a countdown array
let countdown = [];
let num = 5;

while (num > 0) {
    countdown.push(num);
    num--;
}
// console.log(countdown);

// WAP 3 : do-while loop
// WAP that ask the user to enter their favourite tea and end the program only 
// when user enters STOP. All the inputs need to be stored in an array
let teaCollection = [];
let tea;

// do {
//     tea = prompt("Enter your favourite tea, type 'stop' to end the program");

//     if (tea !== "stop") {
//         teaCollection.push(tea)
//     }
// } while (tea != "stop");


// WAP 4 : for loop
// WAP for multiplication table using for loop
let numb = 9;

for (let index = 1; index <= 10; index++) {
    // console.log(`9 x ${index} = ${9 * index}`)
}


