(function () {
    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    function translateNumberToGerman() {
        var germanTranslation = [
            "eins",
            "zwei",
            "drei",
            "vier",
            "fünf",
            "sechs",
            "sieben",
            "acht",
            "neun",
            "zehn",
        ];
        try {
            var num = askForNumber();
            alert(germanTranslation[num - 1]);
        } catch (err) {
            translateNumberToGerman();
        }
    }
    translateNumberToGerman();
})();
