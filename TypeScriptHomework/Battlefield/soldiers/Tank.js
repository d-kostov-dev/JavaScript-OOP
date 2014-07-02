var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Machine;
(function (Machine) {
    var Tank = (function (_super) {
        __extends(Tank, _super);
        function Tank(model, armor, damage) {
            _super.call(this, model, armor);
            this.damage = damage;
            console.log("New tank model " + this.model + " has been created");
        }
        Tank.prototype.addDriver = function (driver) {
            _super.prototype.addDriver.call(this, driver);
            console.log("Driver " + driver.name + " has been assigned to Tank model: " + this.model);
        };

        Tank.prototype.move = function (x, y) {
            return "Tank " + this.model + " " + _super.prototype.move.call(this, x, y);
        };
        return Tank;
    })(BaseClasses.Machine);
    Machine.Tank = Tank;
})(Machine || (Machine = {}));
//# sourceMappingURL=Tank.js.map
