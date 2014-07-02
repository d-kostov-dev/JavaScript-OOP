var BaseClasses;
(function (BaseClasses) {
    var Machine = (function () {
        function Machine(model, armor) {
            this.model = model;
            this.armor = armor;
        }
        Machine.prototype.move = function (x, y) {
            return "has move to: " + x + " - " + y;
        };

        Machine.prototype.addDriver = function (driver) {
            this.driver = driver;
        };
        return Machine;
    })();
    BaseClasses.Machine = Machine;
})(BaseClasses || (BaseClasses = {}));
//# sourceMappingURL=Machine.js.map
