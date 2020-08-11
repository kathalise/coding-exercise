console.log("sanity check!");

var square = document.getElementById("square");

square.addEventListener("mousedown", function () {
    function generateRandomRgbColor() {
        return Math.floor(Math.random() * 256);
    }

    square.addEventListener("mouseup", function () {
        function generateRandomRgbColor() {
            return Math.floor(Math.random() * 256);
        }

        square.addEventListener("mousedown", function (event) {
            var r = generateRandomRgbColor();
            var g = generateRandomRgbColor();
            var b = generateRandomRgbColor();
            var randomColor = "rgb(" + r + ", " + g + "," + b + ")";
            square.style.backgroundColor = randomColor;
        });

        square.addEventListener("mouseup", function (event) {
            var r = generateRandomRgbColor();
            var g = generateRandomRgbColor();
            var b = generateRandomRgbColor();
            console.log(r, g, b);
            var randomColor = "rgb(" + r + ", " + g + "," + b + ")";
            console.log(randomColor);
            square.style.backgroundColor = randomColor;
        });
    });
});
