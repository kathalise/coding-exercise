console.log("sanity check!");

(function () {
    var headlines = document.getElementById("headlines");
    var links = document.getElementsByTagName("a");
    console.log(links);
    var left = headlines.offsetLeft;
    var reqId;
    move();
    function move() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
        reqID = requestAnimationFrame(move);
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function (event) {
            console.log("sanity check Mouseover");
            event.target.textDecoration = "underline";
            event.target.style.color = "hotpink";
            // console.log(event);

            cancelAnimationFrame(reqID);
        });
        links[i].addEventListener("mouseleave", function (event) {
            console.log("sanity check Mouseleave");
            event.target.style.color = "blue";
            event.target.style.textDecoration = "none";

            reqId = requestAnimationFrame(move);
        });
    }
})();
