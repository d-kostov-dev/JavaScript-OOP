define(["jquery"], function ($) {

    var Canvas = (function (canvasSelector, size) {
        var canvas = $(canvasSelector)[0];
        var ctx = canvas.getContext("2d");
        var width = $(canvas).width();
        var height = $(canvas).height();
        var rectSize = size;

        function clearCanvas() {
            ctx.fillStyle = "#006900";
            ctx.fillRect(0, 0, width, height);
            ctx.strokeStyle = "#FFBF00";
            ctx.strokeRect(0, 0, width, height);
        }

        function drawRect(x, y, type) {
            ctx.lineWidth = 1;
            if (type === "snake") {
                ctx.fillStyle = "#FFFF12";
            } else {
                ctx.fillStyle = "#CC0003";
            }

            ctx.fillRect(x * rectSize, y * rectSize, rectSize, rectSize);
            ctx.strokeStyle = "black";
            ctx.strokeRect(x * rectSize, y * rectSize, rectSize, rectSize);
        }

        function showScore(score) {
            var text = "Score: " + score;
            ctx.fillText(text, 10, height - 10);
        }

        return {
            clearCanvas: clearCanvas,
            width: width,
            height: height,
            ctx: ctx,
            rectSize: rectSize,
            draw: drawRect,
            showScore: showScore
        }
    });

    return Canvas;
});