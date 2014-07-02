var BaseClasses;
(function (BaseClasses) {
    var Army = (function () {
        function Army() {
        }
        Army.prototype.addUnits = function (unit) {
            this.availableArmy.push(unit);
        };
        return Army;
    })();
    BaseClasses.Army = Army;
})(BaseClasses || (BaseClasses = {}));
//# sourceMappingURL=army.js.map
