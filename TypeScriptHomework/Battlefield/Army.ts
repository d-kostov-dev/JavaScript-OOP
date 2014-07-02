class ArmyCollection<T> {
    availableArmy: T[];

    constructor(public value: T) { }

    addUnits<T>(unit) {
        this.availableArmy.push(unit);
    }
}