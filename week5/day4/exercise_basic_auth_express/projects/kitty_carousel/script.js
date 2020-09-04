console.log("sanity check");

(function () {
    var kitties = document.querySelectorAll("#carousel img");
    var circles = document.getElementsByClassName("circle");
    var current = 0;
    var timer;
    var isInTheMiddleOfAnAnimation;

    document.addEventListener("transitionend", function (e) {
        for (var current = 0; current < kitties.length; current++) {
            if (e.target.classList.contains("offscreen-left")) {
                e.target.classList.remove("offscreen-left");
                timer = setTimeout(moveKitties, 5000);
                isInTheMiddleOfAnAnimation = false;
            }
        }
    });

    for (var i = 0; i < circles.length; i++) {
        (function (i) {
            circles[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("fill-circle")) {
                    return;
                }
                if (isInTheMiddleOfAnAnimation) {
                    return;
                }
                clearTimeout(timer);
                moveKitties(i);
            });
        })(i);
    }

    timer = setTimeout(moveKitties, 5000);

    function moveKitties(nextIndex) {
        isInTheMiddleOfAnAnimation = true;
        kitties[current].classList.remove("onscreen");
        circles[current].classList.remove("fill-circle");
        kitties[current].classList.add("offscreen-left");
        current++;
        if (typeof nextIndex == "undefined") {
            if (current >= kitties.length) {
                current = 0;
            }
        } else {
            current = nextIndex;
        }
        kitties[current].classList.add("onscreen");
        circles[current].classList.add("fill-circle");
    }
})();
