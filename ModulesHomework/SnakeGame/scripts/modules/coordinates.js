define(function () {

    var Coordinates = (function (x, y) {
        var cordX = x;
        var cordY = y;

        function getX() {
            return cordX;
        }

        function getY() {
            return cordY;
        }

        return {
            x: getX(),
            y: getY()
        }
    });

    return Coordinates;
});