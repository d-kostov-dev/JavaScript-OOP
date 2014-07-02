module BaseClasses {
    export class Soldier implements Interfaces.ISoldier {
        name: string;
        health: number;
        damage: number;

        constructor(name: string, health: number, damage: number) {
            this.name = name;
            this.health = health;
            this.damage = damage;
        }

        greet() : string{
            return "Hi my name is " + this.name;
        }

        attack(): void {
            console.log(name + "started an attack");
        }
    }
}