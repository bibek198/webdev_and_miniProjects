// WAP 1 : for loop
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTea = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai") {
        break; // exits the loop and brings the control 
        // out of the loop
    }
    selectedTea.push(teas[i]);
}
// console.log(selectedTea);


// WAP 2 : for-of loop -> element based, array
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const element of numbers) {
    if (element === 4) {
        break;
    }
    smallNumbers.push(element)
}
// console.log(smallNumbers);

// skip 4 but store all other 
let skipFour = [];

for (const element of numbers) {
    if (element === 4) {
        continue;
    }
    skipFour.push(element)
}
// console.log(skipFour);


// WAP 3 : for-in loop -> key based, object
let citiesPopulation = {
    "london": 890000,
    "berline": 230000,
    "janakpur": 234534,
    "New york": 120000,
    "kathmandu": 12345,
}

let populationArray = [];
for (const key in citiesPopulation) {
    // console.log(key);
    populationArray.push(citiesPopulation[key]) 
}
// console.log(populationArray);

// WAP 4 : for-each loop
let teasCollection = ["green tea", "black tea", "chai", "oolong tea"];
let availableTea = [];

teasCollection.forEach((tea) => {
    // console.log(tea);
});

// general function 
// function hello() {
//     console.log("abc")
// }

// dont need name of the fucntion as we are using it in the 
// the loop

// method 1 : nameless function 
// function () {

// }

// method 2 : nameless fucntion
// () => {

// }

// thus foreach loop we can pass function 

teasCollection.forEach(function(tea) {
    if (tea === "chai") {
        // break; // wont work inside function scope
        return;
    }
    availableTea.push(tea);
});
// console.log(availableTea);


// WAP 4 : for-each loop
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Kathmandu"];
let travelledCities = [];

myWorldCities.forEach((city) => {
    if (city === "Sydney") {
        return;
    }
    travelledCities.push(city);
});
// console.log(travelledCities);

