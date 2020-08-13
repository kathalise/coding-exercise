console.log("sanity check");

(function () {
    var kitties = document.querySelectorAll("#carousel img");
    var current = 0;
    // console.log(kitties);

    document.addEventListener("transitionend", function (e) {
        console.log("test");

        for (var current = 0; current < kitties.length; current++) {
            if (e.target.classList.contains("offscreen-left")) {
                e.target.classList.remove("offscreen-left");
                setTimeout(moveKitties, 5000);
            }
        }
    });
    setTimeout(moveKitties, 5000);

    function moveKitties() {
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("offscreen-left");
        current++;
        if (current >= kitties.length) {
            current = 0;
        }
        console.log("Is on screen");
        kitties[current].classList.add("onscreen");
    }
})();
