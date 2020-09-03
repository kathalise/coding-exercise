console.log("sanity check");
(function () {
    var container = $(".container");
    var topImage = $("#top-image");
    var slider = $("#bar");

    slider.on("mousedown", function () {
        container.on("mousemove", function (e) {
            if (e.clientX < container.width()) {
                slider.css({
                    left: e.clientX,
                });
                topImage.css({
                    width: e.clientX,
                });
                $(topImage).click(function () {
                    container.unbind("mousemove");
                });
            }
        });
    });
})();
