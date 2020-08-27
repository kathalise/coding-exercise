// console.log("Am I still sane?");

const url = require("url");
const queryString = require("querystring");

const input = process.argv[2];
// console.log("input", input);

var myUrl = url.parse(input);
// console.log("This is an Object with object properties", myUrl);

var myQuery = queryString.parse(myUrl.query);
// console.log("My Query value-pairs", myQuery);

console.log("The protocol is http", myUrl.protocol);
console.log("The host is", myUrl.host);
console.log("The hostname is", myUrl.hostname);
console.log("The port is", myUrl.port);
console.log("The pathname is", myUrl.pathname);
console.log("The query is", myUrl.query);

for (var prop in myQuery) {
    console.log(`The value of the ${prop} parameter is ${myQuery[prop]}`);
}
