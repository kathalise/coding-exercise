console.log("sanity check!");

(function () {
    var headlines = $("#headlines");
    var links = $("a");

    $.ajax({
        url: "/file.json",
        method: "GET",

        success: function (response) {
            console.log("json!!!!", response);
            move();
            var myNews = [];
            for (var i = 0; i < response.length; i++) {
                myNews +=
                    "<a href='" +
                    response[i].href +
                    "'>" +
                    response[i].text +
                    "</a>";
            }

            headlines.html(myNews);
        },
        error: function (error) {
            console.log(error.status);
        },
        complete: function (response) {
            console.log("COMPLETE", response);
        },
    });

    var left = headlines.offset().left;
    var reqId;
    function move() {
        left--;
        if (left <= -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            headlines += links.eq(0);
        }
        headlines.css({
            left: left,
        });

        reqID = requestAnimationFrame(move);
    }
    for (var i = 0; i < links.length; i++) {
        links.on("mouseover", function (event) {
            console.log("mouseover");

            $(event.target).css({
                color: "hotpink",
                "text-decoration": "underline",
            });
            cancelAnimationFrame(reqID);
        });
    }
    ///Neither Event listeners are working ??? ////
    links.on("mouseleave", function (event) {
        console.log("sanity check Mouseleave");
        $(event.target).css({
            color: "blue",
            "text-decoration": "none",
        });
        reqId = requestAnimationFrame(move);
    });
})();
