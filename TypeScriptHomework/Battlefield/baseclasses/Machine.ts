module BaseClasses {
    export class Machine implements Interfaces.IMachine {
        model: string;
        armor: number;
        driver: Interfaces.ISoldier;

        constructor(model: string, armor: number) {
            this.model = model;
            this.armor = armor;
        }

        move(x: number, y: number): string {
            return "has move to: " + x + " - " + y;
        }

        addDriver(driver: Interfaces.ISoldier) : void {
            this.driver = driver;
        }
    }
}