console.log("sanity check!");

(function () {
    var headlines = $("#headlines");
    var links = $("a");

    var left = headlines.offset().left;

    var reqId;
    move();
    function move() {
        left--;
        if (left <= -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            headlines.append(links.eq(0));
        }
        headlines.css({
            left: left,
        });
        // console.log(move());

        reqID = requestAnimationFrame(move);
    }

    for (var i = 0; i < links.length; i++) {
        links.on("mouseover", function (event) {
            // console.log("sanity check Mouseover");
            $(event.target).css({
                color: "hotpink",
                "text-decoration": "underline",
            });
            cancelAnimationFrame(reqID);
        });
    }
    links.on("mouseleave", function (event) {
        console.log("sanity check Mouseleave");
        $(event.target).css({
            color: "blue",
            "text-decoration": "none",
        });

        reqId = requestAnimationFrame(move);
    });
})();
