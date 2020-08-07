//Exercise 1:

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    };
}

function Square(x) {
    this.width = x;
    this.height = x;
    this.getArea = function () {
        return this.width * this.height;
    };
}
var rect = new Rectangle(4, 5);
// console.log(rect.getArea());
var square = new Square(4);
// console.log(square.getArea());

//Exercise 2:
function invertCase(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newString += str[i].toLowerCase();
        } else {
            str[i] === str[i].toLowerCase();
            newString += str[i].toUpperCase();
        }
    }
    return newString;
}
//console.log(invertCase("tHIS WAS A very intense 1ST WEEK!!!"));
