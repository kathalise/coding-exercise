//Exercise 1:

function sum() {
    var sum = 0;
    for (var x = 0; x < arguments.length; x++) {
        sum += arguments[x];
    }
    return sum;
}

// console.log(sum(5, 10));
// console.log(sum(5, 10, 15));
// console.log(sum(5, 10, 15, 100, 200));

//Exercise 2:

function waitThenRun() {
    setTimeout(function () {
        console.log("Hello!");
        console.log("Goodbye!");
    }, 1500);
}

waitThenRun();

//Exercise 3:
function myFunction(num) {
    if (num <= 0 || isNaN(num)) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        return (num = myFunction(num * 10));
    }
}

// console.log(myFunction(0));
// console.log(myFunction(5));
