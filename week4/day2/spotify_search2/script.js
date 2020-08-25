(function () {
    // console.log("am I sane?");
    var submitButton = $(".submit-button");
    // console.log("button", submitButton);
    var nextUrl;
    var resultsContainer = $(".results-container");
    // var giveMeMore = $(".giveMeMore");

    var moreButton = $(".more");
    var userInput;
    var dropdownInput;
    var image = $(".img");

    submitButton.on("click", function () {
        var userInput = $(".search").val();
        var dropdownInput = $(".artist-or-album").val();

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                q: userInput,
                type: dropdownInput,
            },
            success: function (results) {
                results = results.artists || results.albums;
                // console.log("results.artist", results.artist);
                setNextUrl(results.next);
                if (results.items.length == 0) {
                    $(".results-for").append(
                        "Sorry, there seems to be no results for: " +
                            userInput +
                            "."
                    );
                } else {
                    $(".results-for").html("Results for: " + userInput);
                }
                var names = "";
                var externalUrl = "";
                var images;

                for (var i = 0; i < results.items.length; i++) {
                    if (results.items.length >= 20) {
                        moreButton.css({
                            visibility: "visible",
                        });
                    }
                    if (location.search.indexOf("scroll=infinite") > -1) {
                        console.log("am I seeing the scroll??");
                        checkScrollPosition();
                        moreButton.css({
                            visibility: "hidden",
                        });
                    }
                    if (results.items[i].images.length == 0) {
                        resultsContainer.append(
                            "<div class='myCard'>" +
                                '<img src="https://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png"/>' +
                                "<div class='text-link'>" +
                                '<a href="' +
                                results.items[i].external_urls.spotify +
                                '">' +
                                results.items[i].name +
                                "</a>" +
                                "</div" +
                                "</div"
                        );
                    } else {
                        resultsContainer.append(
                            "<div class='myCard'>" +
                                '<img class="picture-music" src="' +
                                results.items[i].images[0].url +
                                '"/>' +
                                "<div class='text-link'>" +
                                '<a href="' +
                                results.items[i].external_urls.spotify +
                                '">' +
                                results.items[i].name +
                                "</a>" +
                                "</div" +
                                "</div"
                        );
                    }
                }

                // console.log("Return images", results.items[0].images[0].url);
            }, // closes success
        }); // closes ajax
    }); // closes click handler

    moreButton.on("click", function () {
        console.log("I am clicking?");
        $.ajax({
            url: nextUrl,

            success: function (results) {
                results = results.artists || results.albums;
                setNextUrl(results.next);
                var itemsFromFn = getResultsHtml(results.items);
            },
        });
    }); // closes click event

    function setNextUrl(next) {
        if (next) {
            nextUrl = next.replace(
                "https://api.spotify.com/v1/search",
                "https://spicedify.herokuapp.com/spotify"
            );
        }
    }

    function getResultsHtml(items) {
        var names = "";
        var externalUrl = "";
        var images;
        for (var i = 0; i < results.items.length; i++) {
            if (results.items[i].images.length == 0) {
                resultsContainer.append(
                    "<div class='myCard'>" +
                        '<img src="https://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png"/>' +
                        "<div class='text-link'>" +
                        '<a href="' +
                        results.items[i].external_urls.spotify +
                        '">' +
                        results.items[i].name +
                        "</a>" +
                        "</div" +
                        "</div"
                );
            } else {
                resultsContainer.append(
                    "<div class='myCard'>" +
                        '<img class="picture-music" src="' +
                        results.items[i].images[0].url +
                        '"/>' +
                        "<div class='text-link'>" +
                        '<a href="' +
                        results.items[i].external_urls.spotify +
                        '">' +
                        results.items[i].name +
                        "</a>" +
                        "</div" +
                        "</div"
                );
            }
        }
    }

    function checkScrollPosition() {
        console.log("at the bottom!!!");

        // console.log("window height: ", $(window).height());
        // console.log("document height: ", $(document).height());
        // console.log("document scroll top: ", $(document).scrollTop());
        setTimeout(function () {
            if (
                $(window).height() + $(document).scrollTop() >=
                $(document).height() - 500
            ) {
                $.ajax({
                    url: nextUrl,

                    success: function (results) {
                        results = results.artists || results.albums;
                        // console.log("results.artist", results.artist);
                        setNextUrl(results.next);

                        var itemsFromFn = getResultsHtml(results.items);
                    },
                });
                checkScrollPosition();
            } else {
                checkScrollPosition();
            }
        }, 500);
    }
})(); // closes iife
