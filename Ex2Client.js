function drawInClient() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var i;
    for (i = 0; i < 360; i += 5) {   // drawing the x-axis
        ctx.moveTo(i+5, 180);
        ctx.lineTo(i, 180);
    }
    ctx.stroke();

    for (i = 0; i < 360; i += 5) {   // drawing the y-axis
        ctx.moveTo(180, i+5);
        ctx.lineTo(180, i);
    }
    ctx.stroke();

    var counter = 0, x = 0, y =180;

    var increase = 90 / 180 * Math.PI / 900;
    for (i = 0; i <= 360; i += 0.1) {
        ctx.moveTo(x, y);
        x = i;
        y = 180 + Math.sin(counter) * 150;
        counter += increase;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}