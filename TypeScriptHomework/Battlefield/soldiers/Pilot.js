var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Soldier;
(function (Soldier) {
    var Pilot = (function (_super) {
        __extends(Pilot, _super);
        function Pilot(name, health, damage, type) {
            _super.call(this, name, health, damage);
            this.pilotType = type;
        }
        Pilot.prototype.greet = function () {
            var greeting = _super.prototype.greet.call(this);
            greeting += " and i am a " + Enumerations.PilotType[this.pilotType];

            return greeting;
        };
        Pilot.uniformColor = "Gray";
        return Pilot;
    })(BaseClasses.Soldier);
    Soldier.Pilot = Pilot;
})(Soldier || (Soldier = {}));
//# sourceMappingURL=Pilot.js.map
