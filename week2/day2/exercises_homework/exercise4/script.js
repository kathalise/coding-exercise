console.log("sanity check");

var bigBox = document.getElementById("big-box");
console.log("My bigBox");

bigBox.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Stop bubbling up!");
    function generateRandomRgbColor() {
        return Math.floor(Math.random() * 256);
    }

    bigBox.addEventListener("click", function (event) {
        var r = generateRandomRgbColor();
        var g = generateRandomRgbColor();
        var b = generateRandomRgbColor();
        console.log(r, g, b);
        var randomColor = "rgb(" + r + ", " + g + "," + b + ")";
        console.log(randomColor);
        bigBox.style.backgroundColor = randomColor;
    });
});

var smallBox = document.getElementById("small-box");
console.log("My smallBox");

smallBox.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Stop bubbling up2??");
    function generateRandomRgbColor() {
        return Math.floor(Math.random() * 256);
    }

    smallBox.addEventListener("click", function (event) {
        var r = generateRandomRgbColor();
        var g = generateRandomRgbColor();
        var b = generateRandomRgbColor();
        console.log(r, g, b);
        var randomColor = "rgb(" + r + ", " + g + "," + b + ")";
        console.log(randomColor);
        smallBox.style.backgroundColor = randomColor;
    });
});
