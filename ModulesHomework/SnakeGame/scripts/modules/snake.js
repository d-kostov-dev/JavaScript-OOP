define(['coordinates'], function (Cords) {

    var Snake = (function () {
        var initialSnakeLength = 5;
        var snakeParts = [];

        (function generateSnake() {
            for (var i = initialSnakeLength - 1; i >= 0; i--) {
                var currentCoords = new Cords(i, 10);
                snakeParts.push(currentCoords);
            }
        }());

        return {
            snakeBody: snakeParts,
        }
    });

    return Snake;
});