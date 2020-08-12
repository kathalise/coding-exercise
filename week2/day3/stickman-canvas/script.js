console.log("sanity check!");

(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.beginPath();

    ctx.arc(240, 100, 50, 0, 2 * Math.PI);
    // first argument (x, y, radius, startingAngle, endAngle)

    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.strokeStyle = "blue";

    ctx.lineWidth = 4;
    ctx.beginPath();

    ctx.rect(238, 152, 5, 150);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "orange";
    ctx.fill();

    /// legs ///
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.lineTo(238, 300);
    ctx.lineTo(180, 430);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(244, 300);
    ctx.lineTo(301, 430);
    ctx.stroke();

    /// feet ///
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.lineTo(180, 430);
    ctx.lineTo(150, 430);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(301, 430);
    ctx.lineTo(271, 430);
    ctx.stroke();

    /// arms ///
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.lineTo(300, 280);
    ctx.lineTo(244, 180);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(180, 280);
    ctx.lineTo(238, 180);
    ctx.stroke();

    /// mouth ///
    ctx.strokeStyle = "hotpink";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(240, 105, 30, 0.5, 0.8 * Math.PI);
    ctx.stroke();

    /// eyes ///
    ctx.beginPath();
    ctx.arc(220, 90, 4, 0, 2 * Math.PI);
    ctx.arc(260, 90, 4, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.fill();
})();
