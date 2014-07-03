define(['coordinates'], function (Cords) {

    var Food = function (canvas) {
        var coordinates;
        var cellSize = canvas.rectSize;
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;

        (function generateFood() {
            var randomX = Math.round(Math.random() * (canvasWidth - cellSize) / cellSize);
            var randomY = Math.round(Math.random() * (canvasHeight - cellSize) / cellSize)
            coordinates = new Cords(randomX, randomY);
        }());

        return {
            x: coordinates.x,
            y: coordinates.y,
        }
    }

    return Food;
});