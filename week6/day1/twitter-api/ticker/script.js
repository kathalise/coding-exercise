console.log("sanity check!");
console.log("Do you copy?xxxx");

(function () {
    var headlines = $("#headlines");
    var reqId;
    var left = headlines.offset().left;
    var links = $("a");

    $.ajax({
        url: "/file.json",
        method: "GET",

        success: function (response) {
            console.log("json!!!!", response);
            move();

            var myNews = [];
            for (var i = 0; i < response.length; i++) {
                var addToMyNews =
                    "<a href='" +
                    response[i].href +
                    "'>" +
                    response[i].text +
                    "</a>";
                myNews.push(addToMyNews);
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

    function move() {
        left--;
        if (left <= -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            headlines += links.eq(0);
        }
        headlines.css({
            left: left,
        });

        reqId = requestAnimationFrame(move);
    }
    $(document).on("mouseover", "a", function (event) {
        console.log("mouseover is happening?");

        $(event.target).css({
            color: "hotpink",
            "text-decoration": "underline",
        });
        cancelAnimationFrame(reqId);
    });

    ///Neither Event listeners are working ??? ////
    $(document).on("mouseleave", "a", function (event) {
        console.log("sanity check Mouseleave");
        $(event.target).css({
            color: "blue",
            "text-decoration": "none",
        });
        reqId = requestAnimationFrame(move);
    });
})();
