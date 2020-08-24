(function () {
    var submitButton = $(".submit-button");
    // console.log("button", submitButton);
    var nextUrl;
    var resultsOfSearch = $(".searchResults");
    var giveMeMore = $(".giveMeMore");

    var userInput;
    var dropdownInput;
    var image = $(".img");

    submitButton.on("click", function () {
        // console.log("click on button!");
        var userInput = $(".search").val();
        // console.log("userinput!", userInput);
        var dropdownInput = $(".artist-or-album").val();
        // console.log("dropdownInput", dropdownInput);

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                q: userInput,
                type: dropdownInput,
            },
            success: function (results) {
                // console.log("results", results);

                // if (dropdownInput === "artist") {
                //     // console.log(
                //     //     "first artist name",
                //     //     results.artist.items[0].name
                //     // );

                //     results.artist.items[0].name;
                // } else {
                //     // console.log(
                //     //     "first album name",
                //     //     results.album.items[0].name
                //     // );
                //     results.album.items[0].name;

                // if / else can be also written like THIS:
                results = results.artists || results.albums;
                // console.log("results.artist", results.artist);
                $.each(results.items, function (i) {
                    $(".searchResults").append(
                        // "<p>" + results.items[i].name + "</p>",
                        '<img src="' +
                            results.items[i].images[1].url +
                            '"/>' +
                            '<a href="' +
                            results.items[i].external_urls.spotify +
                            '">' +
                            results.items[i].name +
                            "</a>"
                    );
                });

                // if (results.items.length >= 20) {
                //     giveMeMore.css({
                //         visibility: "visible",
                //     });
                //     }

                console.log("give me first name:", results.items[0].name);
                console.log(
                    "give me url to artist:",
                    results.items[0].external_urls
                );
                console.log("give me image", results.items[0].images[0]);
                console.log("nextURL", nextUrl);

                if (results.next) {
                    nextUrl = results.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );
                }
            }, // closes success
        }); // closes ajax
    }); // closes click handler
})(); // closes iife
