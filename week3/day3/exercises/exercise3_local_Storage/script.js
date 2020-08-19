// console.log($);
// console.log("sanity check!");

(function () {
    var textarea = $("#textarea");
    var content = "";
    textarea.val(localStorage.getItem("contentkey"));
    textarea.on("input", function () {
        content = textarea.val();
        localStorage.setItem("contentkey", content);
    });
})();
