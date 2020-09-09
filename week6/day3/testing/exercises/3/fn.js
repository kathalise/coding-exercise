module.exports = function fn(argument) {
    if (typeof argument == "string") {
        let newString = "";
        for (let i = argument.length - 1; i >= 0; i--) {
            newString += argument[i];
        }
        return newString;
    } else if (Array.isArray(argument) == true) {
        let arr = [];
        for (var i = 0; i < argument.length; i++) {
            arr.push(fn(argument[i]));
        }
        return arr;
    } else {
        return null;
    }
};

/// Testing without ---module.exports--- ///
// console.log(fn("Funky Chicken"));
// console.log(fn(90210));
// console.log(fn(["Funky Chicken", 90320]));
