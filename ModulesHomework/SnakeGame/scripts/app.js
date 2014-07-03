(function () {
    require.config({
        paths: {
            "jquery": "libs/jquery",
            "loader": "loader",
            "canvas": "modules/canvas",
            "snake": "modules/snake",
            "coordinates": "modules/coordinates",
            "food": "modules/food",
        }
    });

    require(["loader"], function (Modules) {
        var canvas = new Modules.Canvas("#snakeCanvas", 10),
            gameSpeed = 100,
            direction,
            gameScore,
            snakeBody,
            food;

        function gameLoop() {
            direction = "right";
            snakeBody = new Modules.Snake().snakeBody;
            food = new Modules.Food(canvas);
            gameScore = 0;

            if (typeof engineLoop != "undefined") {
                clearInterval(engineLoop);
            }

            engineLoop = setInterval(engine, gameSpeed);
        }

        gameLoop();

        function engine() {
            canvas.clearCanvas();

            var newX = snakeBody[0].x;
            var newY = snakeBody[0].y;

            // Next Move
            if (direction == "right") {
                newX++;
            } else if (direction == "left") {
                newX--;
            } else if (direction == "up") {
                newY--;
            } else if (direction == "down") {
                newY++;
            }

            // Restart Game
            if (newX == -1 ||
                newX == canvas.width / canvas.rectSize ||
                newY == -1 ||
                newY == canvas.height / canvas.rectSize ||
                collision(newX, newY, snakeBody)
                ) {
                gameLoop();
                return;
            }

            // Eats or not
            if (newX == food.x && newY == food.y) {
                var snakePart = new Modules.Position(newX, newY);
                gameScore++;
                food = new Modules.Food(canvas);
            } else {
                var snakePart = snakeBody.pop();
                snakePart.x = newX;
                snakePart.y = newY;
            }

            snakeBody.unshift(snakePart);

            // Draw the snake
            for (var i = 0; i < snakeBody.length; i++) {
                var currentPart = snakeBody[i];
                canvas.draw(currentPart.x, currentPart.y, "snake");
            }

            // Draw the food
            canvas.draw(food.x, food.y, "food");

            // Show Highscore
            canvas.showScore(gameScore);
        }

        function collision(x, y, array) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].x == x && array[i].y == y) {
                    return true;
                }
            }

            return false;
        }

        $(document).keydown(function (e) {
            var keyPressed = e.which;

            if (keyPressed == "37" && direction != "right") {
                direction = "left";
            } else if (keyPressed == "38" && direction != "down") {
                direction = "up";
            } else if (keyPressed == "39" && direction != "left") {
                direction = "right";
            } else if (keyPressed == "40" && direction != "up") {
                direction = "down";
            }
        })
    });
}());