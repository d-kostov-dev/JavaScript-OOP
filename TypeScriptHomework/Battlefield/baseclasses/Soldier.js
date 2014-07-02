var BaseClasses;
(function (BaseClasses) {
    var Soldier = (function () {
        function Soldier(name, health, damage) {
            this.name = name;
            this.health = health;
            this.damage = damage;
        }
        Soldier.prototype.greet = function () {
            return "Hi my name is " + this.name;
        };

        Soldier.prototype.attack = function () {
            console.log(name + "started an attack");
        };
        return Soldier;
    })();
    BaseClasses.Soldier = Soldier;
})(BaseClasses || (BaseClasses = {}));
//# sourceMappingURL=Soldier.js.map
