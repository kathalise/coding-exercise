console.log($);
(function () {
    var textarea = $("#textarea");
    var button = $("#button");
    var testMe;

    textarea.on("input", function () {
        testMe = textarea.val();
    });

    button.on("click", function () {
        try {
            JSON.parse(testMe);
            return alert("JSON valid");
        } catch (err) {
            return alert("JSON not valid");
            // console.log("click");
        }
    });
})();

//creating my json
// var obj = {
//     name: "kat",
//     age: 31,
// };

// var json = JSON.stringify(obj);
// console.log(json);
