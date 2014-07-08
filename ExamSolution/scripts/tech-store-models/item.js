define(function () {
    'use strict';

    var Item;

    Item = (function () {
        // Private Variables
        var allowedTypes = ['accessory', 'smart-phone', 'notebook', 'pc', 'tablet'];

        // Private functions
        // Check validity functions.
        function isValidType(type) {
            if (allowedTypes.indexOf(type) > -1) {
                return true;
            } else {
                throw new TypeError("Invalid Item type! Items can't be type: " + type + "!");
            }
        }

        function isValidName(name) {
            if (6 <= name.length && name.length <= 40) {
                return true;
            } else {
                throw new TypeError("Invalid Item name! Name must be between 6 and 40 characters long!");
            }
        }

        function isValidPrice(price) {
            if (price > 0) {
                return true;
            } else {
                throw new Error("Invalid Item price! Price can't be zero or less!");
            }
        }

        // Constructor
        function Item(type, name, price) {
            var self = this;

            // Using private functions to check if all passed data is ok. If not and exception will be thrown.
            if (isValidType(type)) {
                self._type = type;
            }

            if (isValidName(name)) {
                self._name = name;
            }

            if (isValidPrice(price)) {
                self._price = price;
            }
        }

        // Public Functions
        // Users should use these getters and setters to work with the object.
        // Using the same private functions. I miss C# properties! :)
        Item.prototype = {
            getType: function () {
                return this._type;
            },
            setType: function (type) {
                if (isValidType(type)) {
                    this._type = type;
                }
            },
            getName: function () {
                return this._name;
            },
            setName: function (name) {
                if (isValidName(name)) {
                    this._name = name;
                }
            },
            getPrice: function () {
                return this._price;
            },
            setPrice: function (price) {
                if (isValidPrice(price)) {
                    this._price = price;
                }
            }
        }

        return Item;
    })();

    return Item;
});