module Interfaces {
    export interface ISoldier {
        name: string;
        health: number;
        damage: number;

        attack(): void;
        greet(): string;
    }
}