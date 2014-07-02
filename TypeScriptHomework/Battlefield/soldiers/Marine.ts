module Soldier {
    export class Marine extends BaseClasses.Soldier {
        static uniformColor = "Green";

        constructor(name: string, health: number, damage: number) {
            super(name, health, damage);
        }

        greet(): string {
            var greeting = super.greet();
            greeting += " and i am a Marine";

            return greeting;
        }
    }
}