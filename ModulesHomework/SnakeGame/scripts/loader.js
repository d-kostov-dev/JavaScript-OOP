define(['canvas', 'snake', 'food', 'coordinates'], function (Canvas, Snake, Food, Coordinates) {
    'use strict';

    return {
        Canvas: function (selector, size) {
            return new Canvas(selector, size);
        },
        Snake: function () {
            return new Snake();
        },
        Food: function (size, width, height) {
            return new Food(size, width, height);
        },
        Position: function (x, y) {
            return new Coordinates(x, y);
        },
    };
});