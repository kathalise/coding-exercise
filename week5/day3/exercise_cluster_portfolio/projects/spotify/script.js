(function () {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

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
                if (location.search.indexOf("scroll=infinite") > -1) {
                    console.log("am I seeing the scroll??");
                    checkScrollPosition();
                }
                if (results.next) {
                    nextUrl = results.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );
                }
                if (results.items.length == 0) {
                    $(".results-for").html(
                        "Sorry, there seems to be no results for: " +
                            userInput +
                            "."
                    );
                } else {
                    $(".results-for").html("Results for: " + userInput);
                }

                var html = Handlebars.templates.template(results);
                console.log("html: ", html);
                resultsContainer.html(html);

                for (var i = 0; i < results.items.length; i++) {
                    if (results.items.length >= 20) {
                        moreButton.css({
                            visibility: "visible",
                        });
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
                // console.log("results.artist", results.artist);
                if (results.next) {
                    nextUrl = results.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );
                    var html = Handlebars.templates.template(results);
                    resultsContainer.html(html);
                }
            },
        });
    }); // closes click event
    function checkScrollPosition() {
        console.log("at the bottom!!!");
        setTimeout(function () {
            if (
                $(window).height() + $(document).scrollTop() >=
                $(document).height() - 200
            ) {
                moreButton.css({
                    visibility: "hidden",
                });
                $.ajax({
                    url: nextUrl,

                    success: function (results) {
                        results = results.artists || results.albums;
                        // console.log("results.artist", results.artist);
                        if (results.next) {
                            nextUrl = results.next.replace(
                                "https://api.spotify.com/v1/search",
                                "https://spicedify.herokuapp.com/spotify"
                            );
                            var html = Handlebars.templates.template(results);
                            console.log("html: ", html);
                            resultsContainer.html(html);
                        }
                    },
                });
            } else {
                checkScrollPosition();
            }
        }, 500);
    }
})(); // closes iife
