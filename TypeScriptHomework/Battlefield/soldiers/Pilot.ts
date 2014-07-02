module Soldier {
    export class Pilot extends BaseClasses.Soldier implements Interfaces.IPilot {
        pilotType: Enumerations.PilotType;

        static uniformColor = "Gray";

        constructor(name: string, health: number, damage: number, type: Enumerations.PilotType) {
            super(name, health, damage);
            this.pilotType = type;
        }

        greet(): string {
            var greeting = super.greet();
            greeting += " and i am a " + Enumerations.PilotType[this.pilotType];

            return greeting;
        }
    }
}