// Exercise 1

function* fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            yield "fizzbuzz";
        } else if (i % 3 === 0) {
            yield "fizz";
        } else if (i % 5 === 0) {
            yield "buzz";
        }
    }
}

const it = fizzBuzz();
for (let result of it) {
    // console.log(result);
}

// Exercise 2
let myArray = [1, 2, 3, 4, 5];

function* reverseArray(arr) {
    yield [...arr].reverse();
}

let reverseMyArr = reverseArray(myArray);
let newArray = reverseMyArr.next().value;

console.log("new reverse array: ", newArray);
