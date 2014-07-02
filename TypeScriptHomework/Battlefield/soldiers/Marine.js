var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Soldier;
(function (Soldier) {
    var Marine = (function (_super) {
        __extends(Marine, _super);
        function Marine(name, health, damage) {
            _super.call(this, name, health, damage);
        }
        Marine.prototype.greet = function () {
            var greeting = _super.prototype.greet.call(this);
            greeting += " and i am a Marine";

            return greeting;
        };
        Marine.uniformColor = "Green";
        return Marine;
    })(BaseClasses.Soldier);
    Soldier.Marine = Marine;
})(Soldier || (Soldier = {}));
//# sourceMappingURL=Marine.js.map
