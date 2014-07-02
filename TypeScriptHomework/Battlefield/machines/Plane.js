var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Machine;
(function (Machine) {
    var Plane = (function (_super) {
        __extends(Plane, _super);
        function Plane(model, armor, damage) {
            _super.call(this, model, armor);
            this.damage = damage;
            console.log("New plane model " + this.model + " has been created");
        }
        Plane.prototype.addDriver = function (driver) {
            _super.prototype.addDriver.call(this, driver);
            console.log("Driver " + driver.name + " has been assigned to Plane model: " + this.model);
        };

        Plane.prototype.move = function (x, y) {
            return "Plane " + this.model + " " + _super.prototype.move.call(this, x, y);
        };
        return Plane;
    })(BaseClasses.Machine);
    Machine.Plane = Plane;
})(Machine || (Machine = {}));
//# sourceMappingURL=Plane.js.map
