console.log("sanity check!");

(function () {
    console.log("Connection set!");
    ///// TRIANGLE //////
    //1. Grab our element and render context to draw in

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //2. Begin my Path -- take pen and begin a new shape
    ctx.beginPath();

    //3. optionally set color and thinkness of the line
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;

    //4. move to starting position
    //moveTo(x,y) - expects two arguments
    ctx.moveTo(100, 100);

    //5. map out other points of our shape
    ctx.lineTo(400, 100);
    ctx.lineTo(250, 300);
    ctx.lineTo(100, 100);
    //close path if you want a perfectly shaped edge of the triangle
    //needs to be placed before .stroke() in order for the shape to be closed
    ctx.closePath();

    //6. draw the shape we have mapped out, little Robot

    ctx.stroke();

    //7. optionally fill shape with color
    // needs to be envoked .fill();

    ctx.fillStyle = "blue";
    ctx.fill();

    ////////////// CIRCLE ////////////

    ctx.strokeStyle = "teal";
    ctx.lineWidth = 4;
    ctx.beginPath();

    ctx.arc(400, 400, 50, 0, 2 * Math.PI);
    // first argument (x, y, radius, startingAngle, endAngle)

    ctx.stroke();
    ctx.fillStyle = "hotpink";
    ctx.fill();
})();
