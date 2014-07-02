var ArmyCollection = (function () {
    function ArmyCollection(value) {
        this.value = value;
    }
    ArmyCollection.prototype.addUnits = function (unit) {
        this.availableArmy.push(unit);
    };
    return ArmyCollection;
})();
//# sourceMappingURL=Army.js.map
