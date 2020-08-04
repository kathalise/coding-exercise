// Exercise 1.
function logType(x) {
    if (x === undefined) {
        console.log("undefined!");
    } else if (typeof x == "function") {
        console.log("function!");
    } else if (typeof x === "string") {
        console.log("string!");
    } else if (typeof x === "bigint") {
        console.log("bigint!");
    } else if (x === null) {
        console.log("null!");
    } else if (Array.isArray(x) === true) {
        console.log("array!");
    } else if (typeof x === "object") {
        console.log("object!");
    } else if (isNaN(x)) {
        console.log("not a number!");
    } else if (typeof x == "number") {
        console.log("number!");
    } else if (x === true || x === false) {
        console.log("boolean!");
    } else {
        console.log("I have no idea!");
    }
}

logType(undefined);
logType(null);
logType(23);
logType("Pizza" / 4);
logType("Hi");
logType(true);
logType(2n);
logType(function () {});
logType({});
logType([]);

// Exercise 2.

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};
for (var prop in a) {
    b[a[prop]] = prop;
}

console.log(b);

// Exercise 3.
for (var i = 10; i > 0; i--) {
    console.log(i);
}
