console.log("sanity check!");

(function () {
    var sideNav = document.getElementsByClassName("side-nav")[0];
    var overlay = document.getElementsByClassName("overlay")[0];
    var hamburger = document.getElementById("hamburger");
    var close = document.getElementById("x");

    hamburger.addEventListener("click", function () {
        sideNav.classList.remove("goAway");
        sideNav.style.visibility = "visible";
        overlay.style.visibility = "visible";
    });

    close.addEventListener("click", function () {
        sideNav.classList.add("goAway");
        sideNav.style.visibility = "hidden";
        overlay.style.visibility = "hidden";
    });
})();
