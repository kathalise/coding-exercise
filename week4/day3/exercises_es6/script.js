//Exercise 1
var array = [1, 2, 3, 4, 5];

function returnReverseArray(array) {
    return [...array].reverse();
}
returnReverseArray(array);
// console.log("Exercise 1 :", returnReverseArray(array));

// Exercise 2

var array1 = [1, 2, 3, 4, 5];
var array2 = [10, 20, 30, 40, 50];

function twoArraysInOne(array1, array2) {
    return [...array1, ...array2];
}
twoArraysInOne(array1, array2);
// console.log("Exercise 2 :", twoArraysInOne(array1, array2));

// Exercise 3

function logInfo(city) {
    const { name, country, numPeople } = city;
    // console.log(
    //     "Exercise 3:",
    //     `${name} is in ${country} and has ${numPeople} in it.`
    // );
}

// Testing function logInfo
var city = {
    name: "Berlin",
    country: "Germany",
    numPeople: "3.7 mio people",
};
logInfo(city);

// Exercise 4

// var object = {
//     name: "Berlin",
//     country: "Germany",
// };

function getNameAndCountry(object) {
    return [object.name, object.country];
}
// console.log("Exercise 4 (1): ", getNameAndCountry(object));

const aTown = {
    name: "Berlin",
    country: "Germany",
};

const bTown = {
    name: "Hamburg",
    // country: "Russia",
};

function getRelocatedCity(city1, city2) {
    if (city2.country == undefined) {
        city2.country = "Germany";
    }

    var returnedObject = {
        city: city1.name,
        country: city2.country,
    };

    return returnedObject;
}
getRelocatedCity(aTown, bTown);
// console.log("Exercise 4 (2)", getRelocatedCity(aTown, bTown));
