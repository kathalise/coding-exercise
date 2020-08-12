//Exercise 1:
function each(objOrArr, callback) {
    if (Array.isArray(objOrArr)) {
        for (var i = 0; i < objOrArr.length; i++) {
            callback(objOrArr[i], i);
        }
    } else {
        for (var key in objOrArr) {
            callback(objOrArr[key], key);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
);

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
});

//Exercise 2:

function myFunction(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

var myArray = ["red", "blue", "yellow", "pink", "green"];
//console.log(myFunction(myArray));
//console.log(myArray);

//Exercise 3 (A):

function getLessThanZero(num) {
    num.filter(function (num) {
        if (num < 0) {
            negativeArray.unshift(num);
        }
    });
    return negativeArray;
}

// var negativeArray = [];
// console.log(getLessThanZero([1, 2]));
// console.log(getLessThanZero([1, 2, -1, -90, 10]));

//Exercise 3 (B):
function getLessThanZero(num) {
    var negativeArray = [];
    return num.filter(function (num) {
        if (num < 0) {
            return negativeArray;
        }
    });
}
console.log(getLessThanZero([1, 2]));
console.log(getLessThanZero([1, 2, -1, -90, 10]));
