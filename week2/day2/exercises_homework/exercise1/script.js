console.log("sanity check!");

var element = document.getElementById("element");
console.log("hello", element);

document.addEventListener("mousemove", function (mouseEvent) {
    var pageX = mouseEvent.pageX;
    var pageY = mouseEvent.pageY;
    element.style.left = pageX - 50 + "px";
    element.style.top = pageY - 50 + "px";
});
