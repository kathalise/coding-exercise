/*DOM
Exercise 1:*/
function changeElementStyle(str) {
    var element = document.getElementsByTagName(str);
    for (var i = 0; i < element.length; i++) {
        element[i].style.textDecoration = "underline";
        element[i].style.fontStyle = "italic";
        element[i].style.fontWeight = "bold";
    }
}
changeElementStyle("h1"); //testing

// Exercise 2:

function myFunction(stringForClassName) {
    var anyClass = document.getElementsByClassName(stringForClassName);
    myArray = Array.from(
        anyClass
    ); /*turning an array-like object into an array*/
    return myArray;
}
// console.log(myFunction("first-section"));

// Exercise 3:

function ElementIntoBody() {
    var myNewDiv = document.createElement("div");
    myNewDiv.style.position = "fixed";
    myNewDiv.style.zIndex = 2147483647;
    myNewDiv.style.left = "20px";
    myNewDiv.style.top = "100px";
    myNewDiv.style.fontSize = "200px";
    myNewDiv.style.color = "hotpink";
    var text = document.createTextNode("AWESOME");
    myNewDiv.appendChild(text);

    document.body.appendChild(myNewDiv);
}
ElementIntoBody();
