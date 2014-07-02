module Machine {
    export class Plane extends BaseClasses.Machine {
        damage: number;

        constructor(model: string, armor: number, damage: number) {
            super(model, armor);
            this.damage = damage;
            console.log("New plane model " + this.model + " has been created");
        }

        addDriver(driver: Interfaces.ISoldier): void {
            super.addDriver(driver);
            console.log("Driver " + driver.name + " has been assigned to Plane model: " + this.model);
        }

        move(x: number, y: number): string {
            return "Plane " + this.model + " " + super.move(x, y);
        }
    }
}