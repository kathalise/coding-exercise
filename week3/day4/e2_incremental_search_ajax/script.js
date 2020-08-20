(function (countries) {
    var inputField = $('input[name="search"]');
    var resultsContainer = $(".results-container");

    inputField.on("input", function () {
        var inputValue = inputField.val();

        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: inputValue,
            },
            success: function (response) {
                if (inputValue == inputField.val()) {
                    if (response.length === 0) {
                        response = ["No Results"];
                    }
                }

                var countriesHtml = "";
                for (var i = 0; i < response.length; i++) {
                    countriesHtml +=
                        "<p class='country'>" + response[i] + "</p>";
                }
                resultsContainer.html(countriesHtml);
            },
            error: function (error) {
                console.log(error.status);
            },
        });
    });
    resultsContainer.on("mouseover", function (e) {
        // e.stopImmediatePropagation();
        resultsContainer.css({
            "background-color": "white",
        });
        $(e.target).addClass("highlight");
        $(e.relatedTarget).removeClass("highlight");
        console.log("mouseover");
    });

    resultsContainer.on("mousedown", function (e) {
        inputField.val($(e.target).text());
        resultsContainer.html("");
        console.log("mousedown");
    });

    resultsContainer.on("keydown", function (enter) {
        if (enter.keyCode === 13) {
            inputField.val($(enter.target));
            resultsContainer.html("");
        }
    });

    $(document).keydown(function (down) {
        if (down.keyCode === 40) {
            $("p").addClass("highlight");
        }
    });

    $(document).on("keydown", function (up) {
        if (up.keyCode === 38) {
            $("p").addClass("highlight");
        }
    });

    inputField.on("focus", function () {
        resultsContainer.html("");
    });

    inputField.on("blur", function () {
        resultsContainer.html("");
    });
})();
