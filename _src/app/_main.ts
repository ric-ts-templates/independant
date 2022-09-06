import { temp } from "./../lib/Temp.js";


export class Main {
    public run(): void {
        
        this.basicTest();

        console.log(`\n\nREADY`);
    }

    private basicTest(): void {

        console.log(`temp=${temp} (la var 'temp' exportée par Temp.ts ne peut être que lue !!)`); //Lecture autorisée
        // temp = 100; //Ecriture interdite
    }
}