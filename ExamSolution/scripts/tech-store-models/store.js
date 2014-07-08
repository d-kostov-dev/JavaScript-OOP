define(['./item'], function (Item) {
    'use strict';

    var Store;

    Store = (function () {
        // Private functions
        // Check validity functions
        function isValidName(name) {
            if (6 <= name.length && name.length <= 30) {
                return true;
            } else {
                throw new TypeError("Invalid Store name! Name must be between 6 and 30 characters long!");
            }
        }

        // Sorting Functions
        function sortItemsByName(items) {
            items.sort(function (itemA, itemB) {
                if (itemA.getName() < itemB.getName()) {
                    return -1;
                }
                if (itemA.getName() > itemB.getName()) {
                    return 1;
                }

                return 0;
            });

            return items;
        }

        function sortItemsByPrice(items, sortType) {
            if (sortType === "DESC") {
                items.sort(function (itemA, itemB) {
                    return itemB.getPrice() - itemA.getPrice();
                });
            } else {
                items.sort(function (itemA, itemB) {
                    return itemA.getPrice() - itemB.getPrice();
                });
            }

            return items;
        }

        // Filtering Functions
        function filterItemsByType(items, filter) {
            var filteredItems = [];

            // Checks if type is array. If not we make it array. 
            // We can now use the function like this:
            // filterItemsByType(collection, "pesho");
            // filterItemsByType(collection, ["pesho", "gosho"]);
            if (!(filter instanceof Array)) {
                var type = filter;
                filter = [];
                filter.push(type);
            }

            // Filter the items
            for (var i = 0, len = items.length; i < len; i++) {
                var currentItem = items[i],
                    currentType = currentItem.getType();

                if (filter.indexOf(currentType) > -1) {
                    filteredItems.push(currentItem);
                }
            }

            return filteredItems;
        }

        function filterItemsByPriceRange(min, max, items) {
            var filteredItems = [];

            for (var i = 0, len = items.length; i < len; i++) {
                var currentItem = items[i],
                    currentPrice = currentItem.getPrice();

                if (min <= currentPrice && currentPrice <= max) {
                    filteredItems.push(currentItem);
                }
            }

            return filteredItems;
        }

        // Constructor
        function Store(name) {
            var self = this;
            self._itemsInStore = [];

            // Using private function to check if all passed data is ok. If not and exception will be thrown.
            if (isValidName(name)) {
                self._name = name;
            }
        }

        // Public Functions
        // We will always work with a copy of the collection. We will keep the original data intact!
        Store.prototype = {
            getName: function () {
                return this._name;
            },
            setName: function (name) {
                if (isValidName(name)) {
                    this._name = name;
                }
            },
            copyItemsInStore: function () {
                return this._itemsInStore.slice(0); // Saving some repetition of the slice line
            },
            addItem: function (item) {
                // Check if the item that we try to push is of type Item. If not we throw an exception
                if (item instanceof Item) {
                    this._itemsInStore.push(item);
                } else {
                    throw new TypeError("Invalid operation! Store accepts only objects of type Item");
                }

                // Returning this so we have chaining
                return this;
            },
            getAll: function () {
                console.log("----- GET ALL -----");

                var sortedItems = sortItemsByName(this.copyItemsInStore());

                return sortedItems;
            },
            getSmartPhones: function () {
                console.log("\n----- SMART PHONES -----");

                var smartPhones = filterItemsByType(this.copyItemsInStore(), 'smart-phone');
                var sortedSmartPhones = sortItemsByName(smartPhones);

                return sortedSmartPhones;
            },
            getMobiles: function () {
                console.log("\n----- MOBILES -----");

                var mobileItems = filterItemsByType(this.copyItemsInStore(), ['smart-phone', 'tablet']);
                var sortedMobileItems = sortItemsByName(mobileItems);

                return sortedMobileItems;
            },
            getComputers: function () {
                console.log("\n----- COMPUTERS -----");

                var computers = filterItemsByType(this.copyItemsInStore(), ['pc', 'notebook']);
                var sortedComputers = sortItemsByName(computers);

                return sortedComputers;
            },
            filterItemsByType: function (filterType) {
                console.log("\n----- FILTER BY TYPE -----");

                var filteredITems = filterItemsByType(this.copyItemsInStore(), filterType);
                var sortedFilteredItems = sortItemsByName(filteredITems);

                return sortedFilteredItems;
            },
            filterItemsByPrice: function (options) {
                var filteredItems,
                    sortedByPrice,
                    minPrice = 0,
                    maxPrice = 9007199254740992; // Max JS value

                if (options) {
                    minPrice = options.min || minPrice;
                    maxPrice = options.max || maxPrice;
                }

                console.log("\n----- FILTER BY PRICE " + minPrice + " - " + maxPrice + " -----");

                filteredItems = filterItemsByPriceRange(minPrice, maxPrice, this.copyItemsInStore());
                sortedByPrice = sortItemsByPrice(filteredItems); // Default sort is ASC

                return sortedByPrice;
            },
            countItemsByType: function () {
                console.log("\n----- COUNT BY TYPE -----");

                var countedItems = [];

                for (var i = 0, len = this._itemsInStore.length; i < len; i++) {
                    var currentType = this._itemsInStore[i].getType();

                    // Checks if the current type is a key(property) of the array.
                    if (currentType in countedItems) {
                        countedItems[currentType]++;
                    } else {
                        countedItems[currentType] = 1;
                    }
                }

                return countedItems;
            },
            filterItemsByName: function (partOfName) {
                console.log("\n----- FILTER BY NAME -----");

                var filteredItems = [],
                    sortedFilteredItems;

                for (var i = 0, len = this._itemsInStore.length; i < len; i++) {
                    var currentItem = this._itemsInStore[i],
                        currentName = currentItem.getName().toLowerCase();
                    
                    if (currentName.indexOf(partOfName.toLowerCase()) > -1) {
                        filteredItems.push(currentItem);
                    }
                }
                
                sortedFilteredItems = sortItemsByName(filteredItems);

                return sortedFilteredItems;
            },
        }

        return Store;
    })();

    return Store;
});